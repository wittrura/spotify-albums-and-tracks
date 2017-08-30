const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;
// const KEY = require(API KEY HERE)

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
