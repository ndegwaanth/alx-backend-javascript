const express = require('express')
const app = express();
console.log('API available on localhost port 7865');
app.get('/', (req, res) => {
  res.send('Welcome to the payment system')
})
app.get('/cart/:id', (req, res, next) => {
  const id = req.params.id;
  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`)
  }
  next();
})
app.listen(7865)
module.exports = app;
