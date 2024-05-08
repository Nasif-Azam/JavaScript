// String Includes()
// Checks if a string contains another string.
// Used for search search functionality. Items search using text or strings
const products = [
    { title: 'back bench', company: 'ikea' },
    { title: 'iron table', company: 'marcos' },
    { title: 'chair', company: 'caressa' },
    { title: 'wooden table', company: 'ikea' },
];
const testProduct = {
    title: 'wooden table', company: 'ikea'
};

const firstName = 'Nasif';
const result = firstName.includes('Na', 0);
console.log(result);

const productsResult = testProduct.title.includes('wood');
console.log(productsResult);

const text = 'ta';
const filterProducts = products.filter((product)=>
    product.title.toLowerCase().includes(text)
);
console.log(filterProducts);