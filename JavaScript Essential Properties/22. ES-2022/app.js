// EcmaScript - 2022
// at() -> takes integer and returns the item at that index-string, array
// Top level Await - Basic Example
// For use ES-22 --> in <script> tag add type="module"

import fetchDataApi from "./fetchDataApi.js";
const dataFromApi = await fetchDataApi();
console.log(dataFromApi);


const scores = [99, 90, 100];
const oldLast = scores[scores.length - 1];
console.log(oldLast);

const newLast = scores.at(-1);
console.log(newLast);

const string = 'Nasif Azam';
console.log(string.at(-1))

// First Option
fetch('https://www.course-api.com/react-tabs-project')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
// Second Option
const fetchData = async () => {
    const resp = await fetch('https://www.course-api.com/react-tabs-project');
    const data = await resp.json();
    console.log(data)
}
fetchData();
// Third Option or Top level Await
const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data)