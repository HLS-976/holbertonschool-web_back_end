/* eslint-disable */

export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;  
    }

    get name() {
    return this._name;
    }

    get code() {
    return this._code;
    }

    set name(name) {
    this._name = name;
    }

    set code(code) {
    this._code = code;
    }

    get [Symbol.toStringTag]() {
    return 'Airport';
    }

    toString() {
    return `[object ${this._code}]`;
    }
}
