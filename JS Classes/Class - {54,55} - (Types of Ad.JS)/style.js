"use stirct"
let a = 06;
let b = "Nasif Azam";
let c = true;
let d;
let e = null; //Null Is Not Exist in JS
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

let info ={
    first_name:"Nasif",
    last_name: "Azam"
}
info.prof= "SCADA Eng";
console.log(typeof(info));
console.log(typeof( {} ));
console.log(typeof( [] ));
console.log(typeof( function() {} ));

let check = () =>{
    console.log("Checking");
}
check.notice = "I'm Object Too";
console.log(check.notice);
console.log(typeof(check));

const array=[1,2,3];
console.log(array);
console.log(typeof(array));
console.log(Array.isArray(array));

const obj={
    0 : 1,
    2 : 2,
    3 : 3
}
console.log(obj);
console.log(typeof(obj));
console.log(Array.isArray(obj));
