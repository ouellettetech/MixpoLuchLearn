var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app){

    app.post('/api/person', jsonParser, function(req, res) {
        //save to db.
    });

    app.get('/api/person/:id', function(req, res) {
        // get that data from database
        res.json({FirstName: 'John', lastName: 'Doe'});
    });

    app.delete('/api/person/:id', function(req,res){
        // delete from the database
    });

}