// Array.from
// Array.from -> Not on a Prototype
// Array.from -> Use to make paginitions application
// Array -> Keyword
// from -> returns Array Object from an Object
// With a lenght property or an iterable object
// from -> turns array-like or array-ish (string, nodeList, Set) into array

const company = 'company';
console.log(Array.from(company));
const text = document.querySelectorAll('.text');
console.log(text); // NodeList isn't able to use map(), find() etc
// Access Methods through Array.from() and .textContent attribute
const newText = Array.from(text).find((item)=> item.textContent === 'Person');
console.log(newText);
// Create an array using Array.from() by passing lenght property
const array = Array.from({length:5}); // Create array with 5 items but items are undefined
console.log(array);
// Access array index to add data in array
const arrayItems = Array.from({length:120}, (_, index) =>{
    // console.log(index);
    return index;
});
console.log(arrayItems);
const arrayItemsPerPage = 8;
const pages = Math.ceil(arrayItems.length / arrayItemsPerPage);
console.log(pages);
// Create a new array which contain page number and each page contain some items from the arrayItems
const newArray = Array.from({length: pages}, (_, index) =>{
    const start = index * arrayItemsPerPage;
    const tempItems = arrayItems.slice(start, start + arrayItemsPerPage);
    console.log(start);
    console.log(tempItems);
    return tempItems;
});
console.log(newArray);
