const expect = require("chai").expect;
const getPaymentTokenFromAPI = require("./6-payment_token.js");

describe("Async test with done", function() {
  it("asserts data received from api", function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      expect(reponse).to.deep.equal({data: 'Successful response from the API' });
      done();
    }).catch(err => {
      done(err);
    });
  });
  it("should do nothing when success is false", function() {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});

