// Filter and Find
// Filter : Returns a new array, can manipilate the size of new array (Unlike Map method), returns based on condition.
// Find : Returns single instance (object), return first match, if no match return undefined.
const people = [
  {name: 'Nasif', age: 23, position: 'Developer'},
  {name: 'Azam', age: 25, position: 'Designer'},
  {name: 'Jarin', age: 20, position: 'Coder'},
  {name: 'Zisha', age: 22, position: 'Intern'},
];
const fruits = ['Apple', 'Orange', 'Mango', 'Lemon', 'Pear'];
// Filter method based on condition
const youngPeople = people.filter((person)=>{
  console.log(person);
  // if(person.age < 23){
  //   return person;
  // }
  return person.age < 23; // One line condition
});
console.log(youngPeople);
// One line condition
const numOfDevelopers = people.filter((person) => person.position === 'Developer');
console.log(numOfDevelopers);
const findApple = fruits.filter((fruit) => fruit === 'Apple');
console.log(findApple);
// No Match
const seniorDevelopers = people.filter((person) => person.position === 'Senior Developer');
console.log(seniorDevelopers);
// Filter method specific item
console.log(numOfDevelopers[0].position)
console.log(youngPeople[1].position)

// Find method returns 1st match as instances/object 
const findNasif = people.find((person) =>{
  return (person.name === 'Nasif');
});
console.log(findNasif);
const findMango = fruits.find((fruit) => fruit === 'Mango');
console.log(findMango)
// No match
const oldPerson = people.find((person)=> person.age > 25);
console.log(oldPerson);
// Multiple matches - first match
const randomPerson = people.find((person) => person.age < 26);
console.log(randomPerson);
// Find method specific item
console.log(findNasif.position);
