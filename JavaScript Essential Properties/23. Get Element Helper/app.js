// Get Element Helper
const heading = document.querySelector('.heading');
console.log(heading);

const listItems = document.querySelectorAll('.list-item');
console.log(listItems)

const getElement = (selector, isList) => {
    if (isList) {
        const element = [...document.querySelectorAll(selector)];
        if (element.length < 1) {
            throw new Error(`Check the selector: ${selector}`);
        }
        return element;
    }

    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Check the selector: ${selector}`);
}
console.log(getElement('.heading'));
console.log(getElement('.list-item'));
console.log(getElement('.list-item', true));

// Combine above logics
const getElementByClassName = (selector, isList) => {
    const element = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
    // Not a list -> exist or not
    // List -> empty or not
    // Option-1
    // if (!isList && element) return element;
    // if (isList && !element.length < 1) return element;
    // Option-2
    if ((!isList && element) || (!element.length < 1)) return element;
    throw new Error(`Check the selector: ${selector}`);
}
console.log(getElementByClassName('.heading'));
console.log(getElementByClassName('.list-item'));
console.log(getElementByClassName('.list-item', true));