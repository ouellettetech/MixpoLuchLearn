////Long Running Function
//function waitThreeSeconds(){
//    var ms = 3000 + new Date().getTime();
//    while(new Date() <ms ){}
//    console.log('finished function');
//}
//
//function clickHandler() {
//    console.log('click event!');
//}
//
//// listen for the click event
//document.addEventListener('click', clickHandler);
//
//waitThreeSeconds();
//console.log("finished execution");
//
//function greet(name){
//    name = name || '<Your name here>';
//    console.log('hello ' + name);
//}
//
//greet('Tony');
//greet();

var person = new Object();

//computed member access operator
person['firstname'] = "Tony";
person['lastname'] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

// MemberAccess
console.log(person.firstname);