// Reduce Basics
// Iterates, Callback function
// Reduces or Returns to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
//  Always must be return the 1st parameter
const staff = [
    { name: 'Nasif', age: 23, position: 'Developer', salary: 800 },
    { name: 'Azam', age: 25, position: 'Designer', salary: 500 },
    { name: 'Jarin', age: 20, position: 'Coder', salary: 600 },
    { name: 'Zisha', age: 22, position: 'Intern', salary: 200 },
];
const dailySalary = staff.reduce((total, person) =>{
    console.log(total);
    console.log(person.salary);
    total += person.salary;
    return total; // Always must be return the 1st parameter
}, 0);
console.log(dailySalary)