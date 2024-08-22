const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('Testing 1 + 3 = 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('Testing 1 + 3.7 = 5', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('Testing 1.2 + 3.7 = 5', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('Testing 1.5 + 3.7 = 6', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
