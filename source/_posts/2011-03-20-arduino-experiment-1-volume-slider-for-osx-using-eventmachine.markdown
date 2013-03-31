---
comments: true
date: 2011-03-20 12:43:58
layout: post
slug: arduino-experiment-1-volume-slider-for-osx-using-eventmachine
title: 'Arduino Experiment 1 : Volume Slider for OSX using Eventmachine'
wordpress_id: 442
categories:
- Development
---

At the moment I am experimenting a lot with [Arduino](http://www.arduino.cc/). Arduino is an open-source electronics prototyping platform that helps you to build hardware solutions in a very short time.

Arduino can be used as a stand alone solution and can run software on a little chip that is onboard of the circuit. You can write a little weather station with it or create a little device that twitters messages if a certain input is triggered. There are tons of examples for this online. It's also possible to connect it to your pc and use it as an input device for your program.  One solution to react on input from the Arduino board is [Eventmachine](https://github.com/eventmachine/eventmachine/wiki), an event driven I/O framework for ruby.

This is a little program that reads data from the serial port and sets the volume of my mac:

`
require 'serialport'
require 'rubygems'
require 'eventmachine'

if ARGV.size < 1
  puts 'ruby example.rb /dev/tty.your-usbdevice'
  exit 1
end

sp = SerialPort.new(ARGV.shift, 9600, 8, 1, 0)

EventMachine::run do

  EventMachine::defer do
    loop do
      line = sp.gets
      if line
        puts "New volume : #{line}"
        `osascript -e "set volume #{line}"`
      end
    end
  end

end

sp.close
`

Before you run it, you need to install the needed gems with [cci]gem install eventmachine serialport[/cci]. After that you can start the script with [cci]ruby example.rb /dev/tty.your-usbdevice[/cci]. 

But what will it read? At the moment it doesn't read anything because the Arduino isn't transmitting data to it. We need a little program that runs on the Arduino and computes the input and sends a new volume to the serial port. That code is a little bit longer because it has to reduce the jitter from the data. You don't want the volume to constantly switch between 50% and 52%, am I right :) ?

`
// analog pin used to connect the potentiometer
#define POT_PIN        2  

// READ_AVG is how many readings to average
// set it to one less than the actual #
// e.g.: 10 readings = set to 9
//
// the more you average, the more accurate your reading is likely to
// be -- too many though, and you'll start missing changes if the motor
// is moving quickly
#define READ_AVG       9

// variable to read the value from the analog pin 
int val;    

// our current and previous potentiometer readings
int cur_reading = 0;
int pre_reading = 0;
int steps   = 0;

// our current readings array, and our previous average readings array
int vals[READ_AVG + 1];
int prev_posts[2]  = { 0, 0 };

void setup() {
  Serial.begin(9600);           // set up Serial library at 9600 bps
}

int read_pot() {
  //read the voltage on the potentiometer:
  cur_reading = analogRead(POT_PIN);
  int diff = 0;
  int post = prev_posts[1];

  // we're going to average the last READ_AVG reads
  // put in a value for our current step
  vals[steps] = cur_reading;

  // if we've saved enough values to go ahead and perform an average...
  if( steps >= READ_AVG ) {
     // reset our read counter
     steps = 0;

     // determine the average value read
     // -- this is mostly to deal with big jitter
     int tot = 0;
     int avg = 0;

     // sum up totals
     for (int i = 0; i <= READ_AVG; i++) {
       tot += vals[i];
     }

     avg = tot / READ_AVG + 1;

     // ignore current reading if it was either of our last two readings
     // avoid bouncing back and forth between two readings (slight voltage
     // variation in the same range)

     if( avg == prev_posts[0] || avg == prev_posts[1] ) {
       return(post);
     }

     // determine the absolute difference between the current average
     // and the previous average
     diff = avg > prev_posts[1] ? avg - prev_posts[1] : prev_posts[1] - avg;

     // if there's a difference between the averages
     if( diff > 0 ) {
       // move our last reading back, and put our current reading in
       // our array to track the last two positions
       prev_posts[0] = prev_posts[1];
       prev_posts[1] = avg;
       post = avg;
     }
  } else {
    // increment our saved value # for the next loop
    steps++;
  }
  
  return(post);
}

void loop() { 
  // reads the value of the potentiometer and scale it to use it for volumes (between 0 and 7)
  int newVal = map(read_pot(), 0, 1023, 7, 0);     

  if (val != newVal) {
    val = newVal;
    Serial.println(val); 
  }

} 
`

Now you have to compile and upload the code ( For details on how to do this, there is a good [documentation](http://arduino.cc/en/Guide/HomePage) about it ). 

Connect a potentiometer to +5, GND and Pin 2 and after that it should look something like this:



Hallo

Hallo

More links around Arduino can be found in my [delicious account](http://www.delicious.com/bodum/arduino).
