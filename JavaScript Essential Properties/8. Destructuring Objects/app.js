// Destructuring Objects
// Faster and Esier way to Access or Unpack variables from Objects
const nasif = {
    first: 'Nasif',
    last: 'Azam',
    city: 'Dhaka',
    siblings: {
        sister: 'Tanzida',
        brother: 'Afnan',
    },
};
// Basic Logic
const firstName = nasif.first;
const lastName = nasif.last;
const sister = nasif.siblings.sister;
const brother = nasif.siblings.brother;
console.log(firstName, lastName, sister, brother);
// Destructuring Logic
const {first, last, city, zip} = nasif; // {} for objects and [] for arrays 
console.log(first, last, city, zip);
// Alias name for variable name
const {first:startName, last:endName, siblings:{sister:elderSister} } = nasif;
console.log(startName, endName, elderSister);
// Function Destructuring Objects - 1
function printPerson(person) {
    const {first, last, siblings} = person
    console.log(first, last, siblings.sister);
}
printPerson(nasif);
// Function Destructuring Objects - 2
function displayPerson({ first, last, siblings:{brother}}) {
    console.log(first, last, brother);
}
displayPerson(nasif);