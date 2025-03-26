export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof lenght !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }

    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._lenght;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set lenght(value) {
    if (typeof value === 'number') {
      this._lenght = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw TypeError('Array must be an array');
    }
  }
}
