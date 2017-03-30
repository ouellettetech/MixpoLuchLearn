var express = require('express');
var app = express();
var mongoose = require('mongoose');

var waitTill = new Date(new Date().getTime() + 10 * 1000);
while(waitTill > new Date()){}

mongoose.connect('mongodb://db:27017/addressbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Dow',
    address: '555 Main St.'
});

john.save(function(err){
    if (err) throw err;

    console.log('person saved!');
});

var jane = Person({
    firstname: 'Jane`',
    lastname: 'Dow',
    address: '555 Main St.'
});


jane.save(function(err){
    if (err) throw err;

    console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 1337

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req,res,next){
    console.log('Request URL: ' + req.url);

    // get all the users
    Person.find({}, function(err, users) {
        if(err) throw err;

        // object of all the users
        console.log(users);
    });

    next();
});

htmlController(app);
apiController(app);
app.listen(port);