// Promises - 2
// .first -> After 1s first Red; 1s
// .second -> After 3s second Blue; 4s
// .third -> After 2s third Green; 6s
// IN SEQUENCE WITHOUT HARD CODING
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // console.log("Hello Zisha");
    addColor('.first', 1000, 'red', 'Powered by NASIF')
        .then((data) => addColor('.second', 3000, 'blue', data))
        .then((data) => {
            addColor('.third', 2000, 'green')
            console.log(data);
        })
        .catch((err) => console.log(err));
});

const addColor = (selector, time, color, data) => {
    const element = document.querySelector(selector);
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                element.style.border = `1px solid ${color}`;
                resolve(data);
            }, time);
        } else {
            reject(`There is no such element: "${selector}"`);
        }
    });
};