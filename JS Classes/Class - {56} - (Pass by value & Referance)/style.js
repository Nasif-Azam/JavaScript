"use stirct"
let a = 6;
let b = a;
b = b + 4;

console.log(a);
console.log(b);

const obj1 = {
    First_Name : "Nasif",
    Last_Name : "Azam"
}
const obj2 = obj1;
obj2.Last_Name = "Singh";

console.log(obj1);
console.log(obj2);

const array1 = [1,2,3,4];
// const array2 = array1;
const array2 = [].concat(array1);
array2.push(5);

console.log(array1);
console.log(array2);

let likes = '500k';
const youtube ={
    name : 'Nasif Azam',
    likes : '1000k',
    subscribers : '1lakh'    
}

const myFun = (y,z) =>{
    y = '2000k';
    console.log(y);
    z.subscribers = '2lakh'
}
myFun(likes, youtube);

console.log(likes);
console.log(youtube.likes);
console.log(youtube.subscribers);
