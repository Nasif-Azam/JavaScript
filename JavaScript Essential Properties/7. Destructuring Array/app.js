// Destructuring Array
// Faster and Esier way to Access or Unpack variables from Arrays
const fruit = ['Orange', 'Banana', 'Mango', 'Lemon'];
const friends = ['Zisha', 'Jarin', 'John', 'Bob', 'Nasif'];
console.log(fruit);
console.log(friends);
const fruit1 = fruit[0];
const fruit2 = fruit[1];
const fruit3 = fruit[2];
const fruit4 = fruit[3];
console.log(fruit1, fruit2, fruit3, fruit4);
// Variable name can be anything to access items
const [Love, Moni, John, Bob, Me, Azam] = friends;
console.log(Love, Moni, John, Bob, Me);
console.log(Love, Moni, John, Bob, Me, Azam);
// Access items in between arrays
const [Zisha, Jarin, , , Myself] = friends;
console.log(Zisha, Jarin, Myself);
// Swap Variables or Overrid variables
let firstName = 'Zisha'; 
let lastName = 'Jarin';
// Swap with Basic Logic
let temp = lastName;
lastName = firstName;
firstName = temp;
console.log(firstName, lastName);
// Swap with Destructuring Logic
let first = 'Azam';
let second = 'Nasif';
[second, first] = [first, second]
console.log(first, second)
