// Strings In JavaScript
let fruit = "banana";
let moreFruits = "banana \n apple"; //New Line

document.write(fruit.length);
document.write("<br>");
document.write(fruit.indexOf("an"));
document.write("<br>");
document.write(fruit.slice(1, 6));
document.write("<br>");
document.write(fruit.replace("ba", "123"));
document.write("<br>");
document.write(fruit.toUpperCase());
document.write("<br>");
document.write(fruit.toLowerCase());
document.write("<br>");
document.write(fruit.charAt(2));
document.write("<br>");
document.write(fruit[2]);
document.write("<br>");
console.log(fruit.split('.'));

// Array 
let fruits = ['apple', 'banana', 'orange', 'pineApple'];
console.log(fruits);
fruits = new Array('apple', 'banana', 'orange', 'pineApple');
console.log(fruits[2]);
console.log(fruits[0] = 'pear');
fruits[0] = '123';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Hae", fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits.pop(), fruits);
console.log(fruits.push("bery"), fruits);
console.log(fruits[3]);
console.log(fruits.shift(), fruits); // rmv 1st element
console.log(fruits.unshift('Jackfruits'), fruits); // add 1st element

let name = ['Nasif', 'Azam', 'Babu', 'Khushi', 'Moni'];
let all = fruits.concat(name);
console.log(all);
console.log(all.slice(1, 6));
console.log(all.reverse());
console.log(all.sort());

let someNumbers = [5, 6, 8, 64, 952, 1545, 66, 163, 648, 66, 17, 8, 0, -12, -15, -516, -5];
console.log(someNumbers.sort(function (a, b) {
    return a - b;
})); //sorted in ascending order
console.log(someNumbers.sort(function (a, b) {
    return b - a;
})); //sorted in descending order

let emptyArray = new Array();
for (i = 0; i <= 10; i++) {
    emptyArray.push(i);
}
console.log(emptyArray);

// Objects

let student = {
    first: "Nasif",
    last: "Azam",
    age: 20,
    studentInfo: function () {
        return (this.first + '\n' + this.last + '\n' + this.age);
    }
};
console.log(student.first);
// student.last = "Babu";
console.log(student.last);
student.age++
console.log(student.age);
console.log(student.studentInfo());

// Conditional Operator

// var age = prompt('What Is Your Age??');
// if ( (age >= 15) && (age <= 30) ){
//     console.log('Come In');
// } else{
//     console.log('Get Out');
// }

switch (0) {
    case 0:
        text = 'Nasif';
        break;
    case 1:
        text = 'Azam';
        break;
    case 2:
        text = 'is';
        break;
    case 3:
        text = "Khushi's";
        break;
    default:
        text = 'Husband';
}
console.log(text);