/*const chai = require("chai");
const expect = chai.expect;*/
const { expect } = require('chai');
const calculateNumber = require("./2-calcul_chai.js");

describe("asserts 1-calcul.js", function() {
  it("checks equality", function() {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', -1, -2)).to.equal(1);
    expect(calculateNumber('DIVIDE', 6.03, 2)).to.equal(3);
    expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
  });
});
