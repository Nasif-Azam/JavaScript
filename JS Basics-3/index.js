let name = 'AZAM';
console.log(name);

// Cannot be a reserved keyword
//Should be meaningfull name
//Cannot contain a space or hyphen (-)
//Are case-sensitive
let firstName = 'Zisha';
let lastName = 'Moni';
console.log(firstName,lastName);

//for reassaigning variables
let interestRate = 3;
interestRate = 5;
console.log(interestRate);

//for just one variables
const constant = 10; 
console.log(constant);

//value types
let names = 'Nasif';// String Literal
let age = 30;// Number Literal
let isApproved = true;// Boolean Literal
let firstNames = undefined;// Undefined Literal
let selectedColor = null;// Null Literal

// Dynamic Typing on console
typeof names;
typeof firstNames;
typeof selectedColor;

// Object
// let personName = 'NASIF';
// let personAge = '30';
let person = {
    personName: 'NASIF', personAge: 30
};
console.log(person);
// Dot Notation
person.personName = 'Ranveer';
person.personAge = '50';
console.log(person.personName, person.personAge);
// Bracket Notaition
person['personName'] = 'Singh';
console.log(person.personName);

// Arrays []--> arrays notaition
let selectorColor = ['red', 'blue','nasif', 'zisha', 'moni'];
selectorColor[5] = '420';
console.log(selectorColor);
console.log(selectorColor[4]);
console.log(selectorColor.length);

// Functions
function greet(){
    console.log('Hello Nasif');
}
greet();

function greet(NAME, LASTName){
    console.log('Hello ' + NAME + ' ' + LASTName);
}
greet('Mst.', 'Ritu');
greet('Zisha', 'Jarin');
greet('Nasif', 'Azam');

// Type of Functions
// Performing a task
function squre(num) {
    return num * num;
}
let equ = squre(3);
console.log(equ);
// Shortern
function squre(num) {
    return num * num;
}
console.log(squre(2));

