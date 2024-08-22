const request = require('request');
const expect = require('chai').expect;
const server = require('./api');
describe('index page suite', function() {
  it('checks status code', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('checks correct result', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
