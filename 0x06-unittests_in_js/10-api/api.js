const express = require('express')
const app = express();
app.use(express.json())
//app.use(express.urlencoded({ extended: true }));

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
app.get('/available_payments', (req, res, next) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false}});
  // res.send(obj)
  next();
})
app.post('/login', (req, res, next) => {
  let { username } = req.body;
  // let username = 'Betty';
  res.send(`Welcome ${username}`)
  next();
})
app.listen(7865)
module.exports = app;
