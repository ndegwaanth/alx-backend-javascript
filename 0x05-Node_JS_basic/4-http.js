const { listen } = require('express/lib/application');
const http = require('http');
const app = http.createServer(function(req, res) {
    res.write('Hello Holberton School!');
    res.end();
})
app.listen(1245)
module.exports = app