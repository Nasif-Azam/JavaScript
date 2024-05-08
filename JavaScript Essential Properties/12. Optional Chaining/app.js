// Optional Chaining

const people = [
    {
        name: 'Nasif',
        location: {
            street: 'Mirpur-13/B',
            timezone: {
                offset: '+7:00'
            }
        },
    },
    {
        name: 'Azam',
        location: {
            street: 'Newsenpara'
        }
    },
    {
        name: 'Zisha',
        location: {
            street: 'Mulatol',
            timezone: {
                offset: '+9:00',
            }
        },
    },
];

// Basic Logic
people.forEach((person)=>{
    // console.log(person.name);
    // Error for accessing the undefined property Throw Error
    // console.log(person.location.timezone.offset);
    console.log(person.location && person.location.timezone && person.location.timezone.offset); 
});
console.log(true && 'Nasif')

// Optional Chaining Logic
people.forEach((person) =>{
    console.log(person?.location?.timezone?.offset)
    // Instead of undefiend do OR and send custom text
    console.log(person?.location?.timezone?.offset || 'Hello Nasif')
});