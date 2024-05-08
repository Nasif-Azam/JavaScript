// Debounce
// Delay logic
// So it runs 2s after last click
// setTimeout returns id, which pass into clearTimeout
const btn = document.querySelector('.btn');

const debounce = (func) => {
    let timeoutID = 0;
    return () => {
        console.log(timeoutID);
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            func();
        }, 2000);
    };
};
btn.addEventListener('click', debounce(() => console.log('Click')));
