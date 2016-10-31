class NTyped {
  _stringPostion = 0;
  _arrayPosition = 0;

  constructor (element, userOptions = {}) {
    if (this.doesElementExist(element)) {
      this.parseOptions(userOptions);

      this._element = element;
      this._options = Object.assign({}, NTyped.defaultOptions, userOptions);

      this._strings = this._options.strings;

      this.initialize();
    }
  }

  doesElementExist (element) {
    return !!(this.toType(element) !== 'null');
  }

  toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  parseOptions (options) {
    Object.entries(options).forEach(([key, value]) => {
      const defKey = NTyped.defaultOptions[key];
      const valueType = this.toType(value);
      const defKeyType = this.toType(defKey);

      if (defKeyType !== valueType) {
        throw `NativeTyped: Option "${key}" has wrong type. Should be ${defKeyType} but got ${valueType}.`;
      }
    });
  }

  initialize () {
    if (this._options.showCursor) {
      this.addCursorElement();
    }

    this._timeout = setTimeout(() => {
      this.writeCharacter(this._strings[this._arrayPosition], this._stringPostion);
    }, 500);
  }

  addCursorElement () {
    const htmlString = `<span class=${this._options.classes.cursor}>${this._options.cursorChar}</span>`;
    this._element.insertAdjacentHTML('afterend', htmlString);
  }

  writeCharacter (currentString, currentStringPosition) {
    this._timeout = setTimeout(() => {
      if (this._options.stringType === NTyped.Types.HTML) {
        let currentCharacter = currentString.charAt(currentStringPosition);

        // Skip HTML tags or entities.
        if (currentCharacter === '<' || currentCharacter === '&') {
          const endTag = currentCharacter === '<' ? '>' : ';';

          while (currentString.charAt(currentStringPosition + 1) !== endTag &&
                (currentStringPosition + 1) < currentString.length) {
            currentStringPosition++;
          }

          currentStringPosition++;
        }
      }

      if (currentStringPosition === currentString.length) {
        if (!this._options.loop && this._arrayPosition === (this._strings.length - 1)) {
          return;
        }

        this._timeout = setTimeout(() => {
          this.deleteCharacter(currentString, currentStringPosition);
        }, this._options.backDelay);
      } else {
        let nextString = currentString.substr(0, currentStringPosition + 1);

        this.setElementContent(nextString);

        currentStringPosition++;

        this.writeCharacter(currentString, currentStringPosition);
      }
    }, this.getCharacterWriteSpeed(this._options.typeSpeed));
  }

  deleteCharacter(currentString, currentStringPosition) {
    this._timeout = setTimeout(() => {
      let nextString = currentString.substr(0, currentStringPosition);

      if (this._options.stringType === NTyped.Types.HTML) {
        // Skip HTML tags or entities.
        if (currentString.charAt(currentStringPosition) === '>') {
          while (currentString.charAt(currentStringPosition - 1) !== '<' &&
                 currentStringPosition > 0) {
            currentStringPosition--;
          }

          currentStringPosition--;
        }
      }

      this.setElementContent(nextString);

      if (currentStringPosition > 0 ) {
        currentStringPosition--;
        this.deleteCharacter(currentString, currentStringPosition);
      } else {
        this._arrayPosition++;

        if (this._arrayPosition === this._strings.length) {
          this._arrayPosition = 0;
        }

        this.writeCharacter(this._strings[this._arrayPosition], currentStringPosition);
      }
    }, this.getCharacterWriteSpeed(this._options.deleteSpeed));
  }

  setElementContent (nextString) {
    if (this._options.stringType === NTyped.Types.HTML) {
      this._element.innerHTML = nextString;
    } else {
      this._element.textContent = nextString;
    }
  }

  getCharacterWriteSpeed (extraSpeed) {
    return Math.round(Math.random() * (100 - 30)) + extraSpeed;
  }
}

NTyped.Types = {
  HTML: 0,
  TEXT: 1
};

NTyped.defaultOptions = {
  stringType: NTyped.Types.HTML,

  strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!'
  ],

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

export default NTyped;
