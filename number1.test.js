const { test, describe } = require('node:test');
const assert = require('node:assert');
const { sortNumber } = require('./number1');

describe('sortNumber', () => {
  test('mengurutkan angka dari terbesar ke terkecil', () => {
    const result = sortNumber([1, 2, 4, 3, 5, 3, 2, 1]);
    assert.deepEqual(result, [5, 4, 3, 3, 2, 2, 1, 1]);
  });

  test('array yang sudah urut', () => {
    assert.deepEqual(sortNumber([5, 4, 3, 2, 1]), [5, 4, 3, 2, 1]);
  });

  test('array terbalik', () => {
    assert.deepEqual(sortNumber([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });

  test('array kosong dan 1 elemen', () => {
    assert.deepEqual(sortNumber([]), []);
    assert.deepEqual(sortNumber([10]), [10]);
  });

  test('array dengan angka minus', () => {
    assert.deepEqual(sortNumber([-1, -5, 0, 3, -2]), [3, 0, -1, -2, -5]);
  });
});
