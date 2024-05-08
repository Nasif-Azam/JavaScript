// Callback Hell
// After 1s first Red; 1s
// After 3s second Blue; 4s
// After 2s third Green; 6s
// IN SEQUENCE WITHOUT HARD CODING
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// Color Change without sequence
btn1.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red';
        first.style.backgroundColor = 'orange';
    }, 1000);
    setTimeout(() => {
        second.style.color = 'blue';
        second.style.backgroundColor = 'orange';
    }, 3000);
    setTimeout(() => {
        third.style.color = 'green';
        third.style.backgroundColor = 'orange';
    }, 2000);
});

// Color Change with sequence
btn2.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red';
        first.style.backgroundColor = 'orange';
        setTimeout(() => {
            second.style.color = 'blue';
            second.style.backgroundColor = 'orange';
            setTimeout(() => {
                third.style.color = 'green';
                third.style.backgroundColor = 'orange';
            }, 2000);
        }, 3000);
    }, 1000);
});