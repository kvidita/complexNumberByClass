const {strictEqual} = require('assert');
const {describe, it} = require('node:test');
const {Real, Imaginary, ComplexNum} = require('../src/class.js');

describe('testing real number', function() {
  it('should convert the real number into string', function() {
    const actual = new Real(2);
    strictEqual(actual.toString(), '2')
  });

  it('should add another real number to itself', function() {
    const r1 = new Real(2);
    const r2 = new Real(1);
    const actual = r1.add(r2);
    strictEqual(actual.toString(), '3')
  });

  it('should multiply another real number to itself', function() {
    const r1 = new Real(3);
    const r2 = new Real(2);
    const actual = r1.multiply(r2);
    strictEqual(actual.toString(), '6')
  });
});

describe('testing imaginary number', function() {
  it('should convert the imaginary number into string', function() {
    const r1 = new Real(3)
    const actual = new Imaginary(r1) 
    strictEqual(actual.toString(), '3i')
  })

  it('should add the two real number and convert it to an imagirany number', function() {
    const r1 = new Real(2);
    const actual = new Imaginary(r1);
    const r2 = new Real(3);
    const i2 = new Imaginary(r2);
    strictEqual(actual.add(i2).toString(), '5i')
  })

  it('should subtract two real numbers and convert it into an imaginary number', function() {
    const r1 = new Real(2);
    const actual = new Imaginary(r1);
    const r2 = new Real(3);
    const i2 = new Imaginary(r2);
    strictEqual(actual.subtract(i2).toString(), '-1i')
  })

  it('should multiply two imaginary numbers', function() {
    const r1 = new Real(5);
    const actual = new Imaginary(r1);
    const r2 = new Real(2);
    const i2 = new Imaginary(r2);
    strictEqual(actual.multiplyImaginary(i2).toString(), '-10')
  })

  it('should multiply the imaginary number with a real number', function() {
    const r1 = new Real(4);
    const actual = new Imaginary(r1);
    const r2 = new Real(2);
    const i2 = new Imaginary(r2);
    strictEqual(actual.multiplyReal(i2).toString(), '8i')
  })
});

describe('testing Complex number', function() {
  it('should convert a complex number into a string', function() {
    const r1 = new Real(4);
    const r2 = new Real(2);
    const i = new Imaginary(r2);
    const actual = new ComplexNum(r1, i)
    strictEqual(actual.toString(), '4 + 2i')
  })

  it('should add two complex numbers', function() {
    const r1 = new Real(4);
    const r2 = new Real(2);
    const i1 = new Imaginary(r2);
    const actual = new ComplexNum(r1, i1)
    const r3 = new Real(1);
    const r4 = new Real(2);
    const i2 = new Imaginary(r4);
    const c2 = new ComplexNum(r3, i2);
    strictEqual(actual.add(c2).toString(), '5 + 4i')
  })

  it('should subtract two complex numbers', function() {
    const r1 = new Real(4);
    const r2 = new Real(2);
    const i1 = new Imaginary(r2);
    const actual = new ComplexNum(r1, i1)
    const r3 = new Real(1);
    const r4 = new Real(2);
    const i2 = new Imaginary(r4);
    const c2 = new ComplexNum(r3, i2);
    strictEqual(actual.subtract(c2).toString(), '3 + 0i')
  })

})
