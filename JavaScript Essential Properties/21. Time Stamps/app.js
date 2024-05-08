// Time Stamps
console.log(new Date());
// Unix Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now());
}, 1000);

// Create id's in learning apps
let people = [];
people = [...people, {id:Date.now(), name: 'Nasif'}];

setTimeout(()=>{
    people = [...people, { id: Date.now(), name: 'Azam' }];
    console.log(people);
}, 1000)

// Create and Get Dates
console.log(new Date(1691756088900));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60); // 1 minute added
console.log(new Date());
console.log(futureDate);

// Difference between dates
const firstDate = new Date();
const secondDate = new Date(2023, 8, 28);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;
console.log(timeDifference);

const minutes = timeDifference / (1000 * 60);
console.log(minutes);

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours)