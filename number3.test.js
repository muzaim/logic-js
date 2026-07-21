const { test, describe } = require('node:test');
const assert = require('node:assert');
const { sumEven } = require('./number3');

describe('sumEven', () => {
  test('hitung total angka genap objek bersarang dari soal', () => {
    const data = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    assert.equal(sumEven(data), 6);
  });

  test('objek tanpa angka genap', () => {
    const data = { a: 1, b: 3, c: { d: 5 } };
    assert.equal(sumEven(data), 0);
  });

  test('objek dengan angka minus dan ganjil', () => {
    const data = {
      a: 2,
      b: 3,
      c: {
        d: -4,
        e: 5,
        f: { g: 6 }
      }
    };
    assert.equal(sumEven(data), 4);
  });

  test('objek kosong', () => {
    assert.equal(sumEven({}), 0);
  });
});
