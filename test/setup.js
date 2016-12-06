'use strict';

import jsdom from 'jsdom';

// Define some html to be our basic document
// JSDOM will consume this and act as if we were in a browser
const DEFAULT_HTML = `
<html>
  <body>
    <div id='cont'>
      <h1>Test</h1>
      <hr>
      <h2>This is just a test</h2>
      <h3 id="test"></h3>
    </div>
  </body>
</html>`;

// Define some variables to make it look like we're a browser
// First, use JSDOM's fake DOM as the document
global.document = jsdom.jsdom(DEFAULT_HTML);

// Set up a mock window
global.window = document.defaultView;

// Allow for things like window.location
global.navigator = window.navigator;
