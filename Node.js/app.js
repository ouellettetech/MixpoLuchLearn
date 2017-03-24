var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});
console.log('hello');
emtr.emit('greet');