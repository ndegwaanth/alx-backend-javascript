const chai = require("chai");
const expect = chai.expect;
// import sinon
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment.js');
const utils = require('./utils.js');


describe('sendPaymentRequestToApi', function() {
  it('spies on the calculateNumber property', function() {
    let mySpy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(mySpy.calledOnce).to.be.true;
    mySpy.restore();
  });
});
