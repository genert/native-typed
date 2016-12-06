import expect from 'unexpected';
import NTyped from '../source/index.js';

let nativeTyped = null;

describe('Native Typed', () => {
  before(() => {
    nativeTyped = new NTyped(document.getElementById('test'));
  });

  describe('Core', () => {
    it('should be defined', () => {
      expect(nativeTyped, 'to be defined');
    });
  });

  describe('initialize', () => {
    it('should be defined', () => {
      expect(nativeTyped.initialize, 'to be defined');
    });

    it('is function', () => {
      expect(nativeTyped.initialize, 'to be a', 'function');
    });

    it('should work', () => {
      expect(nativeTyped.initialize(), 'to be undefined');
    });
  });

  describe('addCursorElement', () => {
    it('should be defined', () => {
      expect(nativeTyped.addCursorElement, 'to be defined');
    });

    it('is function', () => {
      expect(nativeTyped.addCursorElement, 'to be a', 'function');
    });

    it('should work', () => {
      expect(nativeTyped.addCursorElement(), 'to be undefined');
    });
  });

  describe('writeCharacter', () => {
    it('should be defined', () => {
      expect(nativeTyped.writeCharacter, 'to be defined');
    });

    it('is function', () => {
      expect(nativeTyped.writeCharacter, 'to be a', 'function');
    });

    it('should work', () => {
      expect(nativeTyped.writeCharacter('test', 1), 'to be undefined');
    });
  });

  describe('deleteCharacter', () => {
    it('should be defined', () => {
      expect(nativeTyped.deleteCharacter, 'to be defined');
    });

    it('is function', () => {
      expect(nativeTyped.deleteCharacter, 'to be a', 'function');
    });

    it('should work', () => {
      expect(nativeTyped.deleteCharacter('test', 3), 'to be undefined');
    });
  });

  describe('setElementContent', () => {
    it('should be defined', () => {
      expect(nativeTyped.setElementContent, 'to be defined');
    });

    it('is function', () => {
      expect(nativeTyped.setElementContent, 'to be a', 'function');
    });

    it('should work', () => {
      expect(nativeTyped.setElementContent('test'), 'to be undefined');
    });
  });

  describe('getCharacterWriteSpeed', () => {
    it('should be defined', () => {
      expect(nativeTyped.getCharacterWriteSpeed, 'to be defined');
    });

    it('is function', () => {
      expect(nativeTyped.getCharacterWriteSpeed, 'to be a', 'function');
    });

    it('should return number', () => {
      expect(nativeTyped.getCharacterWriteSpeed(32), 'to be a', 'number');
    });
  });
});
