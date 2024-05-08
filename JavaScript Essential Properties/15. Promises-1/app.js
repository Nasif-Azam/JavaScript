// Promises-1
// Promise is a object that returns a value.
// async await (Privides a clear syntax)
// Consume or Use promises
// Pending, Rejected, Fulfilled (Initially start from Pending)
// if promise goes -> pending -> rejected then it never fulfilled or backtrack to the pending section.
// new Promise((resolve, reject)) -> is a constructor and there attributes are functions themselves. 
const promise1 = new Promise((resolve, reject) => {
    // resolve(); // Pending and not fulfilled because of no data.
    resolve('There was no error'); // Fulfilled because of data.
});
console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
    // reject(); // Rejected and Undefined because of no data.
    reject("There was an error"); // PromiseResult Shows
});
console.log(promise2);

// .then for -> resolve
promise1.then((data) => console.log(data));
// .catch for -> reject
promise2.catch((error) => console.log(error));

const value = 2;
const promise3 = new Promise((resolved, rejected) => {
    const random = Math.floor(Math.random() * 3); // random = 0/1/2
    console.log(random);
    if (random === value) {
        resolved("Correct Assumption.");
    } else {
        rejected("Wrong Assumption!!");
    }
});
console.log(promise3);
promise3.then((data) => console.log(data)).catch((error) => console.log(error));