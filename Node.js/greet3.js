function Greetr() {
    this.greeting = 'Hellow world!!';
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = new Greetr;