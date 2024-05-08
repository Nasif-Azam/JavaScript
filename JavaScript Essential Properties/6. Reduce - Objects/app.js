// Reduce - Objects
// Iterates, Callback function
// Reduces or Returns to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
//  Always must be return the 1st parameter
// Cart Example
const cart = [
    { title: 'Samsung Galaxy S7', price: 500.99, amount: 1},
    { title: 'Google Pixel', price: 400.99, amount: 2},
    { title: 'Redmi Note 2', price: 300.99, amount: 4},
    { title: 'Iphone 12', price: 600.99, amount: 5},
    { title: 'Iphone 14', price: 700.99, amount: 2},
];

// let totalCost = cart.reduce((total, cartItem) =>{
let {totalItems, cartTotalPrice} = cart.reduce((total, cartItem) =>{
    const {amount, price} = cartItem;
    // Count Items
    total.totalItems += amount;
    // Count Total Price
    total.cartTotalPrice += amount * price;    
    return total;
}, {
    totalItems: 0, // Return object with 1st property
    cartTotalPrice: 0 // Return object with 2nd property
});
// console.log(totalCost);
cartTotalPrice = parseFloat(cartTotalPrice.toFixed(2));
console.log(totalItems, cartTotalPrice)


// Github Repos Example
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';