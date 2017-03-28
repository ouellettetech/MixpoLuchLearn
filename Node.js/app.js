var express = require('express');
var app = express();

var port = process.env.PORT || 1337

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({FirstName: 'John', lastName: 'Doe'});
});

app.listen(port);