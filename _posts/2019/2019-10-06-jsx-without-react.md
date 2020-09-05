---
locale: en
comments: true
date: 2019-10-06 00:00:00
layout: post
slug: jsx-without-react
title: "JSX without React"
categories:
  - react
  - javascript
image: "/images/2019-10-06/jsx.jpg"
image_description: A screenshot of a source code file with JSX code.
copyright: Photo by <a href="https://unsplash.com/@flowforfrank?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ferenc Almasi</a>
---
For me [JSX](https://reactjs.org/docs/introducing-jsx.html) is the part of React that makes developing with it a real treat. Yes, the functional nature, the state and lifecycle management are really nice, too, but JSX makes it all come together in a great way. The effortless integration of HTML inside of JavaScript just makes it one of the best experiences writing a web frontend.

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

Sadly for my [current side project](https://wishlephant.com) React was not a great fit. I wanted something smaller. Something that could progressively enhance the website. It was important that everything also works without JavaScript and loaded fast. React was a no go for me.

I tried a few things and decided to give [Stimulus](https://stimulusjs.org/) a chance. After a few hours I realized I really wanted to use JSX inside of my new project, too. But how?

Luckily there already was [a little library](https://github.com/bitboxer/jsx-no-react) that did just that: adding JSX capabilities to projects without React. It was just a small tech demo, but I was able to add a couple of missing features with just a few lines of code. After two PRs the maintainer [Terry](https://github.com/oefd/) allowed me to take over the project and it now lives inside of [my GitHub account](https://github.com/bitboxer/jsx-no-react) 😍.

How does it look like?

```javascript
import { Controller } from "stimulus";
import jsxElem, { render } from "jsx-no-react";

export default class extends Controller {
  connect = () => {
    render(<div>
      Stimulus version of this element
    </div>, this.element);
  };
}
```

Isn’t that nice? Jump over to the [readme](https://github.com/bitboxer/jsx-no-react/blob/master/README.md) to see how you can add it to your own projects.

How it works? That’s not as complicated as it might seem. Turns out that you
just need a [babel plugin](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) that transforms your JSX tree into a method call. Babel
transforms the example from the beginning into this:

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

 The only part missing is the implementation of that method. The implementation is [pretty straight forward](https://github.com/bitboxer/jsx-no-react/blob/master/src/module.js).

After building my project with it I have to say that I really love the mixture of Stimulus and JSX.

If you want to see the end result or ever wanted to have a platform neutral wishlist outside of Amazon, feel free to give [Wishlephant](http://wishlephant.com) a try.
