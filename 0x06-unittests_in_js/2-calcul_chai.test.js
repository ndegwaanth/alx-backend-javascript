const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('sum of 1.4 + 4.5 = 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('Subtraction of 1.4 + 4.5 = -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(4);
    });
  });

  describe('DIVIDE', function () {
    it('Divison of 1.4 / 4.5 = 0.2', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('division with zero 1.4 / 0 = Error', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
