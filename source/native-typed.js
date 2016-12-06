import { doesElementExist, parseOptions } from './utilities';

class NTyped {
  _stringPostion = 0;
  _arrayPosition = 0;

  _element = null;
  _options = null;
  _strings = null;
  _timeout = null;

  constructor (element, userOptions = {}) {
    if (doesElementExist(element) && parseOptions(userOptions, NTyped.defaultOptions)) {
      this._element = element;
      this._options = Object.assign({}, NTyped.defaultOptions, userOptions);

      this._strings = this._options.strings;

      this.initialize();
    }
  }

  initialize () {
    if (this._options && this._options.showCursor) {
      this.addCursorElement();
    }

    this._timeout = setTimeout(() => {
      this.writeCharacter(this._strings[this._arrayPosition], this._stringPostion);
    }, this._options.startDelay);
  }

  addCursorElement () {
    const htmlString = `<span class=${this._options.classes.cursor}>${this._options.cursorChar}</span>`;
    this._element && this._element.insertAdjacentHTML('afterend', htmlString);
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

  deleteCharacter (currentString, currentStringPosition) {
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
    const element = this._element;

    if (this._options.stringType === NTyped.Types.HTML) {
      element.innerHTML = nextString;
    } else {
      element.textContent = nextString;
    }
  }

  getCharacterWriteSpeed (extraSpeed) {
    return Math.round(Math.random() * (100 - 30)) + extraSpeed;
  }

  static Types = {
    HTML: 0,
    TEXT: 1
  };

  static defaultOptions = {
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
      cursor: 'title__cursor'
    }
  };
}

export default NTyped;
