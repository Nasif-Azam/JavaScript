// Callback Function
// Array methods, setTimeout, event listeners etc
function makeUpperCase (value) {
    console.log(value.toUpperCase());
}
// makeUpperCase('jarin zisha');

function reverseString (value) {
    console.log(value.split('').reverse().join('')); // Avoid comma -> .join('')
}

function handleName (firstName, callBack){
    const fullName = `${firstName} azam`;
    callBack(fullName);
}
handleName('nasif', makeUpperCase); // Instead of invoking function, must send just function name
handleName('nasif', reverseString); // reverseString() X 

handleName ('zisha', function (value) { 
    console.log(value);
})

handleName ('nasif', (value) => console.log(value));

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    console.log("Hello World")
});

