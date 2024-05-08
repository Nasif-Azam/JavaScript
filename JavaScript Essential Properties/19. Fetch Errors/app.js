// Fetch Errors
// Only throws an error if cannot resolve.
// Error Response still a response. Error code between(400-500)
const url = "https://www.course-api.com/react-tours-project";

// Fetch API using Async-Await
const getTours = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const msg = `There was an Error: '${response.status} ${response.statusText}'`;
            throw new Error(msg);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    };
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', getTours);