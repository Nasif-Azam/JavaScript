// New Set()
// Set Object -> Stores a collection of unique values of any type
// new set(), add(value), delete(value), has(value), clear() 

const unique = new Set();
console.log(unique);
// Set store only unique values
const age = 23;
unique.add('Nasif');
unique.add('Nasif');
unique.add(age);
unique.add('Zisha');
unique.add('Zisha');
unique.add(23);
unique.add(7);
console.log(unique);
// delete(value) -> Returns boolean true or false
const result = unique.delete(7);
console.log(result);
console.log(unique);
// has(value) -> Returns boolean true or false
const isValue = unique.has('Zisha');
console.log(isValue);
// Iterators
// entries(), keys(), values(), forEach()
const products = [
    { title: 'back bench', company: 'ikea' },
    { title: 'iron table', company: 'marcos' },
    { title: 'chair', company: 'caressa' },
    { title: 'wooden table', company: 'ikea' },
];

const companies = products.map((item) => item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);
// Convert set() into array
const finalCompanies = ['Begin', ...uniqueCompanies, 'End'];
console.log(finalCompanies);

// Iterate all in one-line using set()
const resultProduct = ['Begin',...new Set(products.map((item) => item.company)), 'End'];
console.log(resultProduct);
