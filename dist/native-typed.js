(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NativeTyped"] = factory();
	else
		root["NativeTyped"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NTyped = function () {
	  function NTyped(element) {
	    var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, NTyped);

	    this._stringPostion = 0;
	    this._arrayPosition = 0;

	    if (this.doesElementExist(element)) {
	      this.parseOptions(userOptions);

	      this._element = element;
	      this._options = Object.assign({}, NTyped.defaultOptions, userOptions);

	      this._strings = this._options.strings;

	      this.initialize();
	    }
	  }

	  _createClass(NTyped, [{
	    key: 'doesElementExist',
	    value: function doesElementExist(element) {
	      return !!(this.toType(element) !== 'null');
	    }
	  }, {
	    key: 'toType',
	    value: function toType(obj) {
	      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    }
	  }, {
	    key: 'parseOptions',
	    value: function parseOptions(options) {
	      var _this = this;

	      Object.entries(options).forEach(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2),
	            key = _ref2[0],
	            value = _ref2[1];

	        var defKey = NTyped.defaultOptions[key];
	        var valueType = _this.toType(value);
	        var defKeyType = _this.toType(defKey);

	        if (defKeyType !== valueType) {
	          throw 'NativeTyped: Option "' + key + '" has wrong type. Should be ' + defKeyType + ' but got ' + valueType + '.';
	        }
	      });
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      var _this2 = this;

	      if (this._options.showCursor) {
	        this.addCursorElement();
	      }

	      this._timeout = setTimeout(function () {
	        _this2.writeCharacter(_this2._strings[_this2._arrayPosition], _this2._stringPostion);
	      }, 500);
	    }
	  }, {
	    key: 'addCursorElement',
	    value: function addCursorElement() {
	      var htmlString = '<span class=' + this._options.classes.cursor + '>' + this._options.cursorChar + '</span>';
	      this._element.insertAdjacentHTML('afterend', htmlString);
	    }
	  }, {
	    key: 'writeCharacter',
	    value: function writeCharacter(currentString, currentStringPosition) {
	      var _this3 = this;

	      this._timeout = setTimeout(function () {
	        if (_this3._options.stringType === NTyped.Types.HTML) {
	          var currentCharacter = currentString.charAt(currentStringPosition);

	          // Skip HTML tags or entities.
	          if (currentCharacter === '<' || currentCharacter === '&') {
	            var endTag = currentCharacter === '<' ? '>' : ';';

	            while (currentString.charAt(currentStringPosition + 1) !== endTag && currentStringPosition + 1 < currentString.length) {
	              currentStringPosition++;
	            }

	            currentStringPosition++;
	          }
	        }

	        if (currentStringPosition === currentString.length) {
	          if (!_this3._options.loop && _this3._arrayPosition === _this3._strings.length - 1) {
	            return;
	          }

	          _this3._timeout = setTimeout(function () {
	            _this3.deleteCharacter(currentString, currentStringPosition);
	          }, _this3._options.backDelay);
	        } else {
	          var nextString = currentString.substr(0, currentStringPosition + 1);

	          _this3.setElementContent(nextString);

	          currentStringPosition++;

	          _this3.writeCharacter(currentString, currentStringPosition);
	        }
	      }, this.getCharacterWriteSpeed(this._options.typeSpeed));
	    }
	  }, {
	    key: 'deleteCharacter',
	    value: function deleteCharacter(currentString, currentStringPosition) {
	      var _this4 = this;

	      this._timeout = setTimeout(function () {
	        var nextString = currentString.substr(0, currentStringPosition);

	        if (_this4._options.stringType === NTyped.Types.HTML) {
	          // Skip HTML tags or entities.
	          if (currentString.charAt(currentStringPosition) === '>') {
	            while (currentString.charAt(currentStringPosition - 1) !== '<' && currentStringPosition > 0) {
	              currentStringPosition--;
	            }

	            currentStringPosition--;
	          }
	        }

	        _this4.setElementContent(nextString);

	        if (currentStringPosition > 0) {
	          currentStringPosition--;
	          _this4.deleteCharacter(currentString, currentStringPosition);
	        } else {
	          _this4._arrayPosition++;

	          if (_this4._arrayPosition === _this4._strings.length) {
	            _this4._arrayPosition = 0;
	          }

	          _this4.writeCharacter(_this4._strings[_this4._arrayPosition], currentStringPosition);
	        }
	      }, this.getCharacterWriteSpeed(this._options.deleteSpeed));
	    }
	  }, {
	    key: 'setElementContent',
	    value: function setElementContent(nextString) {
	      if (this._options.stringType === NTyped.Types.HTML) {
	        this._element.innerHTML = nextString;
	      } else {
	        this._element.textContent = nextString;
	      }
	    }
	  }, {
	    key: 'getCharacterWriteSpeed',
	    value: function getCharacterWriteSpeed(extraSpeed) {
	      return Math.round(Math.random() * (100 - 30)) + extraSpeed;
	    }
	  }]);

	  return NTyped;
	}();

	NTyped.Types = {
	  HTML: 0,
	  TEXT: 1
	};

	NTyped.defaultOptions = {
	  stringType: NTyped.Types.HTML,

	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],

	  showCursor: true,
	  cursorChar: '|',

	  loop: true,

	  startDelay: 500,
	  backDelay: 500,
	  typeSpeed: 0,
	  deleteSpeed: 0,

	  classes: {
	    cursor: 'contact__title__typed'
	  }
	};

	exports.default = NTyped;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;