# Native Typed
[![Build Status](https://img.shields.io/travis/Genert/native-typed.svg?style=flat-square)](https://travis-ci.org/Genert/native-typed)
[![NPM Version](https://badge.fury.io/js/native-typed.svg)](https://badge.fury.io/js/native-typed)

A tiny dependency free JavaScript library javascript library **for typing animation**.

- 1.77 kB gzipped of minified version :zap:
- Dependency-free :tada:

```javascript
new NTyped(document.querySelector('#caption'), {
  strings: ['vue', 'react', 'angular'],
  typeSpeed: 30,
  deleteSpeed: 15,
  loop: true
});
```

## Getting Started

#### Step 1: Install

[Download the latest release](https://github.com/Genert/native-typed/blob/master/dist/native-typed.min.js) or install with npm.

```sh
npm install native-typed --save
```

#### Step 2: Reference
If you linked `native-typed` directly in your HTML, you can use `window.NTyped`. If you're using a module bundler, you'll need to import it.

```javascript
// CommonJS
let NTyped = require('native-typed');

// ES2015
import NTyped from 'native-typed';
```

## Options
You can set options on `native-typed` during initialization.

```javascript
// During initialize
new NTyped(document.querySelector('#caption'), {
  strings: ['vue', 'react', 'angular'],
  typeSpeed: 30,
  deleteSpeed: 15,
  loop: true
});
```

> ###`options.strings`
> The array of strings to display in typing animation.
>
> **Default:** *(array)* `['This is a typing animation!', 'You can also add your own sentences', 'So go do it!']`

> ###`options.stringType`
> Determines whether provides strings are using HTML or not. You can choose between `NTyped.Types.HTML` and `NTyped.Types.TEXT`.
>
> **Default:** *(enum)* `NTyped.Types.HTML`

> ###`options.loop`
> Make animation loop.
>
> **Default:** *(boolean)* `true`

> ###`options.showCursor`
> Show cursor.
>
> **Default:** *(boolean)* `true`

> ###`options.cursorChar`
> If cursor is enabled through options, show this character.
>
> **Default:** *(string)* `|`

> ###`options.startDelay`
> Time delay in milliseconds before typing writing animation starts initially.
>
> **Default:** *(int)* `500`

> ###`options.backDelay`
> Time delay in milliseconds before deleting characters after typing them out.
>
> **Default:** *(int)* `500`

> ###`options.typeSpeed`
> The speed of typing characters in milliseconds.
>
> **Default:** *(int)* `0`

> ###`options.deleteSpeed`
> The speed of deleting characters in milliseconds.
>
> **Default:** *(int)* `0`

> ###`options.classes.cursor`
> Classname for cursor element.
>
> **Default:** *(sring)* `title__cursor`
>
> To have the cursor effect, please add following CSS to your stylesheet.
> ```css
> .title__cursor {
>    opacity: 1;
>    animation: blink 750ms infinite;
> }
>
> @keyframes blink {
>    0%   { opacity: 1; }
>    50%  { opacity: 0; }
>    100% { opacity: 1; }
> }
> ```

## Polyfill
The library uses [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) and [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) that you might need polyfill for. You can for instance use *babel-polyfill* in this case.

## Contributions & Issues
Contributions are welcome. Please clearly explain the purpose of the PR and follow the current style.

Issues can be resolved quickest if they are descriptive and include both a reduced test case and a set of steps to reproduce.

## Licence
Licensed under the [MIT License](LICENSE) © 2016 Genert Org

## Extra
**Inspired by:** [Typed.js](http://www.mattboldt.com/demos/typed-js/)
