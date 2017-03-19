var firstName = 'Jane';

(function (lastName) {
    var firstName = 'john';
    console.log(firstName);
    console.log(lastName);
}('Doe'));

console.log(firstName);
