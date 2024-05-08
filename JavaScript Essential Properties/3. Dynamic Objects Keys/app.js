// Dynamic Objects Keys
// Dot Notation
const person = {
  name: 'Nasif'
};
console.log(person.name)
person.age = 23
person.rank = 'Coder'
console.log(person)
// Square Bracket Notation
const items = {
  'featured-items': ['item1', 'item2', 'item3']
};
console.log(items["featured-items"]);
console.log(person['name'])
// Setup Key Dynamically Using Square Bracket Notation
let appState = 'Loading'
appState = 'Not Loading'
const keyName = 'Mobile'
const app = {
  [appState] : true
};
app[keyName] = 'iphone'
console.log(app);
// 
const state = {
  loading: true,
  name: '',
  job: ''
};

function updateState(key, value) { 
  state[key] = value
}
updateState ('salary', 30000);
updateState('name', 'Nasif');
updateState('job', 'Coder');
updateState("loading", false);
updateState('name', 'Azam');
console.log(state);
