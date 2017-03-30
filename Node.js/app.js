var express = require('express');
var app = express();
var config = require('./config');
var port = process.env.PORT || 1337;
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);