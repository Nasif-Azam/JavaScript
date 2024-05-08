// Object into Array
// Object.keys() -> Converts property names into array
// Object.values() -> Converts property values into array
// Object.entries() -> Converts both
const person = {
    name: 'Nasif',
    age: 23,
    status: 'Coder'
};
// Converts property names into array
const keys = Object.keys(person);
console.log(keys);
// Converts property values into array
const values = Object.values(person);
console.log(values);
// Converts both
const result = Object.entries(person);
console.log(result);

// map() method
const newResult = result.map((item) => {
    console.log(item);
    const [first, second] = item;
    console.log(first, second);
    return first;
});
console.log(newResult);

// for of loop
for (const item of result) {
    const [first, second] = item;
    console.log(first, second);
};

for (const [first, second] of result) {
    console.log(first, second);
};