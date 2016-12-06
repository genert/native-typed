# Native Typed
[![Build Status](https://img.shields.io/travis/Genert/native-typed.svg?style=flat-square)](https://travis-ci.org/Genert/native-typed)
[![NPM Version](https://badge.fury.io/js/native-typed.svg)](https://badge.fury.io/js/native-typed)

A tiny dependency free JavaScript library javascript library **for typing animation**.

- 1.77 kB gzipped of minified version :zap:
- Dependency-free :tada:
- IE9+ :heavy_check_mark:

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

> ###`options.loop`
> Make animation loop.
>
> **Default:** *(boolean)* `true`

## Contributions & Issues
Contributions are welcome. Please clearly explain the purpose of the PR and follow the current style.

Issues can be resolved quickest if they are descriptive and include both a reduced test case and a set of steps to reproduce.

## Licence
Licensed under the [MIT License](LICENSE) © 2016 Genert Org

## Extra
**Inspired by** [Typed.js](http://www.mattboldt.com/demos/typed-js/)
