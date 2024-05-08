// Unique Values
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];
// All Values Array
const categories = menu.map((item) => item.category)
console.log(categories)
// Unique Values Object
const uniqueCategoriesObj = new Set(menu.map((item) => item.category));
console.log(uniqueCategoriesObj); 
// Unique Values Array
const uniqueCategoriesArr = [...new Set(menu.map((item) => item.category))];
console.log(uniqueCategoriesArr);
// Unique Values Array
const uniqueCategoryArr = ['All', ...new Set(menu.map((item) => item.category)), 'all'];
console.log(uniqueCategoryArr);
// Integrate with HTML
const result = document.querySelector('#result');
result.innerHTML = uniqueCategoryArr.map((category) => {
    return `<button>${category}</button>`
}).join('')