// function stateent
function greet() {
    console.log('hi');
}
greet();

// functions are first-clas
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

var greetMe = function() {
    console.log('Hi Brad');
}
greetMe();

logGreeting(greetMe);