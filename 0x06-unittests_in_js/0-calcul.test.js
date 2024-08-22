const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("asserts 0-calcul.js", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber(1.7, 3.1), 5);
  });
});
