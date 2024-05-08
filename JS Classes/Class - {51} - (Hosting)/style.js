// "use strict"
console.log("I am a " + job);
var job = "web designer";
console.log("I am a " + job);

function Nasif() {
    console.log("I am a " + job);
    var job = "Engineer";
    console.log("I am a " + job);
}
Nasif();

function sum(a,b){
    add = a + b; // Var not detect
console.log(add);
}
sum(5,10);