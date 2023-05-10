/*
class ComplexNumber {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real
    this.#imaginary = imaginary
  }

  toString() {
    return `${this.#real} + ${this.#imaginary}i`
  }

  add(other) {
    const real = this.#real + other.#real
    const imaginary = this.#imaginary + other.#imaginary
    return new ComplexNumber(real, imaginary)
  }

  multiply(other) {
    const real = this.#real * other.#real - this.#imaginary * other.#imaginary
    const imaginary = this.#real * other.#imaginary + this.#imaginary * other.#real
    return new ComplexNumber(real, imaginary)
  }

};

 */
class Real {
  #real

  constructor(real) {
    this.#real = real
  }

  toString() {
    return `${this.#real}`
  }

  value() {
    return this.#real
  }

  add(other) {
    const real = this.#real + other.#real
    return new Real(real)
  }

  subtract(other) {
    const real = this.#real - other.#real
    return new Real(real)
  }

  multiply(other) {
    const real = this.#real * other.#real
    return new Real(real)
  }

};

class Imaginary {
  #real

  constructor(real) {
    this.#real = real
  }

  toString() {
    return `${this.#real}i`
  }

  add(other) {
    const real = this.#real.add(other.#real)
    return new Imaginary(real)
  }

  subtract(other) {
    const real = this.#real.subtract(other.#real)
    return new Imaginary(real)
  }

  multiplyImaginary(other) {
    const minusOne = new Real(-1);
    return this.#real.multiply(other.#real).multiply(minusOne);
  }

  multiplyReal(other) {
    const real = this.#real.multiply(other.#real)
    return new Imaginary(real)
  }

};

class ComplexNum {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real
    this.#imaginary = imaginary
  }

  toString() {
    return `${this.#real} + ${this.#imaginary}`
  }

  add(other) {
    const real = this.#real.add(other.#real)
    const imaginary = this.#imaginary.add(other.#imaginary)
    return new ComplexNum(real, imaginary)
  }

  subtract(other) {
    const real = this.#real.subtract(other.#real)
    const imaginary = this.#imaginary.subtract(other.#imaginary)
    return new ComplexNum(real, imaginary)
  }

  multiply(other) {
    const realFromImg = this.#imaginary.multiplyImaginary(other.#imaginary);
    const real = realFromImg.add(this.#real.multiply(other.#real));
    const imaginary = this.#imaginary.multiplyReal(other.#imaginary).add(other.#imaginary.multiplyReal(this.#imaginary));
    return new ComplexNum(real, imaginary)
  }
};

exports.Real = Real
exports.Imaginary = Imaginary
exports.ComplexNum = ComplexNum
