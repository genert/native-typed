import expect from 'unexpected';
import NTyped from '../src/index.js';

describe('TTStylesheet', () => {
  let nativeTyped = new NTyped();

  // For debug window of karma runner.
  document.body.innerHTML = `
  <div id='cont'>
    <h1>Test</h1>
    <hr>
    <h2>This is just a test</h2>
  </div>
  `;

  describe('Core', () => {
    it('should be defined', () => {
      expect(nativeTyped, 'to be defined');
    });
  });
});
