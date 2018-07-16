var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.listen(80);
console.log('Listening on port 80');
