// Rest Operator...
// Gather or Collect items for backup
// Using when deal with Destructuring or Functions
// Placement is important, careful with the same name
// Rest using when declare function and Spread using when invoke the function
// ...rest operator always place at the end
// Arrays
const fruits = ['Orange', 'Banana', 'Mango', 'Lemon', 'pear'];
const [first, ...restFruitsItem] = fruits;
console.log(first);
console.log(restFruitsItem); // restFruitsItem return array
const specificFruit = restFruitsItem.find((fruit) => fruit === 'Lemon');
console.log(specificFruit);
// Objects
const person = {name: "Nasif", lastName: "Azam", job: "Developer", salary: 40000};
const {name, lastName, ...rest} = person;
console.log(name, lastName);
console.log(rest)
// Function --> ...rest uses when declare the function 
const getAvgScore = (name, ...scores) =>{
    console.log(name);
    console.log(scores);
    const avg = scores.reduce((total, item)=>{
        return (total += item);
    }, 0) / scores.length;
    console.log(avg);
}
getAvgScore(person.name, 100, 100, 100, 100, 100);

// Function --> ...spread uses when invoke the function 
testScores = [500, 500, 500, 500, 500];
const testScoreAvg = (name, ...scores)=>{
    console.log(name);
    console.log(scores);
    const avg = scores.reduce((total, item)=>{
        return (total += item)
    }, 0) / scores.length;
    console.log(avg);
}
testScoreAvg(person.name, testScores); // NaN because of nested array
testScoreAvg(person.name, ...testScores); // Use spread while invoking the function