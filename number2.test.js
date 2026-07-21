const { test, describe } = require('node:test');
const assert = require('node:assert');
const { maxSubArray } = require('./number2');

describe('maxSubArray', () => {
  test('hitung max subarray dari contoh soal', () => {
    assert.equal(maxSubArray([100, 200, 300, 400], 2), 700);
    assert.equal(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39);
    assert.equal(maxSubArray([-3, 4, 0, -2, 6, -1], 2), 5);
  });

  test('panjang subarray 1', () => {
    assert.equal(maxSubArray([1, 5, 2, 9, 3], 1), 9);
  });

  test('panjang subarray sama dengan panjang array', () => {
    assert.equal(maxSubArray([1, 2, 3, 4], 4), 10);
  });

  test('array nilai negatif semua', () => {
    assert.equal(maxSubArray([-10, -5, -20, -1], 2), -15);
  });
});
