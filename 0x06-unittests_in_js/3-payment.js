const utils = require('./utils.js');
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const payment = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is ${payment}`);
}
module.exports = sendPaymentRequestToApi;
