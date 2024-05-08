// Fetch API -> Browser API for HTTP (AJAX) requests.
// Default -> GET request, supports other methods as well
// Returns Promise

const url = "https://www.course-api.com/react-tours-project";
console.log(fetch(url)); // fetch() method always returns promise

// Fetch API using .then() .catch()
fetch(url)
    .then(response => console.log(response))
    .catch(err => console.log(err))

// Take data as JSON format. JSON returns promises so chain the .then method.
fetch(url)
    .then(response => response.json()) // Because of JSON returns promises
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Fetch API using Async-Await
const getData = async ()=>{
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getData();