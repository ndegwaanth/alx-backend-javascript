const expect = require("chai").expect;
// import sinon
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment.js');
const utils = require('./utils.js');


describe('stub', function() {
  it('it message', function() {
    let mySpy = sinon.spy(console, 'log');
    let myStub = sinon.stub(utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(myStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(mySpy.calledWith('The total is: 10')).to.be.true;
    mySpy.restore();
    myStub.restore();
  });
});
