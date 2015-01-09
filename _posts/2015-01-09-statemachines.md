---
comments: true
date: 2015-01-09 22:00
layout: post
slug: statemachines
title: Introduction to state machines
categories:
- talk
- presentation
- keynote
---
Yesterday I talked about [state machines](https://en.wikipedia.org/wiki/Finite-state_machine)
on the [Berlin Ruby Usergroup](http://berlin.onruby.de).

**Introduction to state machines**

Rails has this nice little feature called [Enums](http://edgeapi.rubyonrails.org/classes/ActiveRecord/Enum.html). The introduction example is something like this:

    class Conversation < ActiveRecord::Base
        enum status: [ :active, :archived ] 
    end

And I think this is dangerous. States should be dealed with in a state machine. Why you ask? Because state changes usually have conditions attached to them. Only archive if ... . If you want to model something like that with enums, you end up with a horrible version of a state machine.

So let's see how we would do this in a "more cleaner way" with state machines.

<script async class="speakerdeck-embed" data-id="ef7cb7b079bc0132d3421ad5c3c2c16b" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
