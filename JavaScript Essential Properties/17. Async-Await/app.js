// Async - Await
// Async must be present, always returns a promise
// Await waits till promise is Settled / Satisfied
// Error handling -> try-catch block
// Fat Arrow Function
const example = async () => {
    return ('Hello Nasif');
}
console.log(example()); // Always returns Promise
// Traditional Function
async function example2() {
    const result = await example();
    console.log(result);
}
console.log(example2());

const users = [
    { id: 1, name: 'Nasif' },
    { id: 2, name: 'Azam' },
    { id: 3, name: 'Jarin' },
    { id: 4, name: 'Zisha' },
];
const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
    { userId: 4, articles: ['ten'] },
];

// async-await method
const getData = async () => {
    try {
        const user = await getUser('Nasif');
        console.log(user);
        if (user) {
            const articles = await getArticles(user.id);
            console.log(articles);
        }
    } catch (error) {
        console.log(error);
    }
}
getData();

// .then() .catch() method
getUser('Azam')
    .then((user) => getArticles(user.id))
    .then((articles) => console.log(articles))
    .catch(err => console.log(err))

function getUser(nameParameter) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === nameParameter);

        if (user) {
            return resolve(user);
        } else {
            reject(`No such user with name: ${nameParameter}`);
        }
    });
};

function getArticles(userIdParameter) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userIdParameter);

        if (userArticles) {
            return resolve(userArticles.articles);
        } else {
            reject(`Wrong ID`);
        }
    });
};