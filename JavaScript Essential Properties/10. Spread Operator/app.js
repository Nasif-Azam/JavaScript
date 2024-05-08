// Spread Operator...
// Allows and Iterable to apread/expand individually inside receiver
// Split into single items and Copy them

// Split String
const company = 'Split String';
const letters = [...company];
console.log(letters);
// Join boys, girls array and bestFriend
const boys = ['Nasif', 'Azam', 'Mister'];
const girls = ['Jarin', 'Zisha', 'Misses'];
const bestFriend = 'Rhythm';
const friends = [boys, girls, bestFriend]; // Without using ...spread operator
const friendsOfMine = [...boys, bestFriend, ...girls]; // With using ...spread operator
console.log(friends); // Shows in nested array
console.log(friendsOfMine); // Shows in one array
// COPY Without ...spread operator new item affect both arrays
const newFriend = friendsOfMine;
newFriend[0] = 'Nancy';
console.log(friendsOfMine);
console.log(newFriend);
// COPY With ...spread operator new item not affect both arrays
const newFemaleFriend = [...friendsOfMine];
newFemaleFriend[0] = 'Rima';
console.log(friendsOfMine);
console.log(newFemaleFriend);
// ES2018 -> ES8 Objects
// COPY objects without affecting each other arrays
const person = { name: "Nasif", lastName: "Azam", job: "Developer" };
let newPerson = {...person};
console.log(person);
console.log(newPerson);
// Adding new properties
newPerson = {...person, City:"Rangpur", job:"Coder"};
console.log(newPerson)