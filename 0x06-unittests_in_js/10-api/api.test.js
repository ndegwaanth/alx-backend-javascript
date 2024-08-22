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
describe('cart page suite', function() {
  it('checks correct status code', function(done) {
   request.get('http://localhost:7865/cart/12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done(); 
  });});
  it('checks incorrect status code', function(done) {
    request.get('http://localhost:7865/cart/g', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
  });});
  it('checks correct result', function(done) {
    request.get('http://localhost:7865/cart/123', function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });
});
// fix this
describe('available endpoint suite', function() {
it('checks correct available_payments result', function(done) {
    request.get('http://localhost:7865/available_payments', function(error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({payment_methods:{credit_cards:true,paypal:false}});
      done();
    });
  });
});
describe('login suite', function() {
it('checks correct login result', function(done) {
    request.post({url: 'http://localhost:7865/login', json: { "username": "Betty" }}, function(error, response, body) {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

});
