const expect = require('chai').expect
const sendPaymentRequestToApi = require('./5-payment.js')
const sinon = require('sinon')

describe('describe message', function() {
    let mySpy;
    beforeEach(function() {
        mySpy = sinon.spy(console, 'log');
    })
    afterEach(function() {
        mySpy.restore();
    })
    it('sending 100 and 20, expects 120', function() {
      sendPaymentRequestToApi(100, 20);
      expect(mySpy.calledOnce).to.be.true;
      expect(mySpy.calledWith('The total is: 120')).to.be.true;
    });
    it('sending 10 and 10, expects 20', function() {
      sendPaymentRequestToApi(10, 10);
      expect(mySpy.calledOnce).to.be.true;
      expect(mySpy.calledWith('The total is: 20')).to.be.true;
    });
});
