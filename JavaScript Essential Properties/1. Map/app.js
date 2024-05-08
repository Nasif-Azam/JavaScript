// Map Method
const people = [
    {
        name: 'Nasif',
        age: 23,
        position: 'developer',
    },
    {
        name: 'Azam',
        age: 25,
        position: 'coder',
    },
    {
        name: 'Zisha',
        age: 20,
        position: 'MERN',
    }
]
// Current array not change but new array change
const ages = people.map((person) => {
    console.log(person)
    return person.age * 2 
});
console.log(ages);

const name = people.map((person) => person.name);
console.log(name)
// Use function in Map
const getAges = (person) => { 
    return person.age * 2
}
const personAge = people.map(getAges) 
console.log(personAge)
// New people array
const newPeople = people.map((person) =>{
    return{
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 10,
        rank: person.position
    };
});
console.log(newPeople)
// Integrate with HTML
const personName = people.map((person) =>{
    return `<h2>${person.name}</h2>`
}); 
const result = document.querySelector('#result')
result.innerHTML = personName.join('')

