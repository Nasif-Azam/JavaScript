// Width and Height -> window, any element
// innerHeight -> window
// innerWidth -> window
// getBoundingCliientReact() -> any element

console.log('height:', window.innerHeight);
console.log('width:', window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', ()=>{
    const dimension =box.getBoundingClientRect();
    console.log(dimension);
});