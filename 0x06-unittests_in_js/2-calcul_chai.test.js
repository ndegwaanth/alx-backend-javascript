// test/2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('../2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 6 when inputs are 2.6 and 3.3', function() {
      expect(calculateNumber('SUM', 2.6, 3.3)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -3 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-3);
    });

    it('should return 0 when inputs are 3.0 and 3.0', function() {
      expect(calculateNumber('SUBTRACT', 3.0, 3.0)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });
});