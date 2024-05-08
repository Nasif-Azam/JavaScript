// Object as Array
var info = [{
    firstName : 'Nasif',
    lastName : 'Azam',
    age : 22,
    profession : 'SCADA Engineer'
},
{
    firstName : 'Md',
    lastName : 'N',
    age : 22,
    profession : 'Web Designer'
}];
console.log(info);
// Object Property
var info2 = {
    firstName : 'Nasif',
    lastName : 'Azam',
    age : 22,
    profession : 'SCADA Engineer'
}

// Single Property
console.log(info2);
console.log(info2.firstName);

// Cng Property
info2.profession = 'Web Designer';
console.log(info2);

// Adding New Property
info2.address = 'BD';
console.log(info2);

// Deleting Property
delete info2.address;
console.log(info2);

