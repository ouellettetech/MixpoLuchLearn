var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }];

module.exports = function(app){

    app.get('/', function(req, res) {
        res.render('index', {serverPeople: people });
    });

    app.get('/person/:id', function(req, res) {
        res.render('person', { ID: req.params.id , Qstr: req.query.qstr })
    });

    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank You for the Json Data!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
};