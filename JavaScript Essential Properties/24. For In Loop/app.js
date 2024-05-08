// For In Loop
// for in loop -> iterate over object properties
// not advised to use it on arrays, especially if the order is important
// on arrays use -> (for of) loop 
const person = {
    name: 'Nasif',
    age: 23,
    status: 'Coder'
};
for (const propertyName in person){
    console.log(`${propertyName}: ${person[propertyName]}`);
}
