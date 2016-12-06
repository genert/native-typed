import expect from 'unexpected';
import { doesElementExist, toType, parseOptions } from '../source/utilities';

describe('Utilities', () => {
  describe('doesElementExist', () => {
    it('is defined', () => {
      expect(doesElementExist, 'to be defined');
    });

    it('is function', () => {
      expect(doesElementExist, 'to be a', 'function');
    });

    it('detects node', () => {
      expect(doesElementExist(document.getElementById('cont')), 'to be a', 'boolean');
      expect(doesElementExist(document.getElementById('cont')), 'to be true');
      expect(doesElementExist(document.getElementById('1321')), 'to be false');
    });
  });

  describe('toType', () => {
    it('is defined', () => {
      expect(toType, 'to be defined');
    });

    it('is function', () => {
      expect(toType, 'to be a', 'function');
    });

    it('detects type', () => {
      expect(toType(true), 'to be', 'boolean');
    });
  });

  describe('toType', () => {
    it('is defined', () => {
      expect(parseOptions, 'to be defined');
    });

    it('is function', () => {
      expect(parseOptions, 'to be a', 'function');
    });

    it('should work', () => {
      const defaultOptions = {
        test: 123,
        hello: 'hello',
        wazzap: 'pizza'
      };
      const userOptions = {
        test: 321
      };

      expect(parseOptions(userOptions, defaultOptions), 'to be true');
    });
  });
});
