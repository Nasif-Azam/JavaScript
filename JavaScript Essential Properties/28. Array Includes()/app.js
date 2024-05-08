// Array Includes()
//Checks if the item is an array
// Useful in the conditional statements
const products = [
    { title: 'back bench', company: 'ikea' },
    { title: 'iron table', company: 'marcos' },
    { title: 'chair', company: 'caressa' },
    { title: 'wooden table', company: 'ikea' },
];

const groceries = ['milk', 'egg', 'meat'];
let randomItem = 'lemon';
randomItem = 'milk';
const isIncluded = groceries.includes(randomItem, 1);
console.log(isIncluded);

if(groceries.includes(randomItem)){
    console.log(`Its on the list.`);
}

