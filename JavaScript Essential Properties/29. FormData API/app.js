// FormData API
const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Won't directly return values
    console.log(formData);
    // Spread Out - entries, values, keys
    // const entries = [...formData.entries()];
    // console.log(entries);
    // const values = [...formData.values()];
    // console.log(values);
    // const keys = [...formData.keys()];
    // console.log(keys);
    // // Iterate over with 'for of' loop
    // for (let [name, value] of formData){
    //     console.log(`${name} = ${value}`)
    // }

    // 2nd Method
    // Check for value
    // const name = formData.get('name');
    // console.log(name);
    // // Append
    // formData.append('Key test', 'Value of Test');
    // // Delete
    // formData.delete('Key test');
    // // Check property
    // const checkName = formData.has('name');
    // console.log(checkName);
    // const entries = [...formData.entries()];
    // console.log(entries)

    // // entries are not JSON 
    // // axios.post('url', formData)
    // const formObject = Object.fromEntries(formData);
    // console.log(formObject);
    // // axios.post('url', formObject)
    // // reset
    // e.currentTarget.reset();

    // Final Method
    const values = [...formData.values()];

    if(values.includes('')){
        console.log('please enter all values');
        return;
    }
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
    e.currentTarget.reset();
});