const express = require('express')
const app = express();
console.log('API available on localhost port 7865');
app.get('/', (req, res) => {
  res.send('Welcome to the payment system')
})
// Listen to port 7865 and log API available on localhost port 7865 to the browser console when the express server is started
app.listen(7865)
module.exports = app;