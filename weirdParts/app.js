function a() {
    let me = 3
    var myVar = 2;
    console.log(me)
    b();
    c();
    function c(){
        console.log(myVar)    
    }
    return c;
}

function b(){
    console.log(myVar)    
}

var myVar =1;
a();
a()()