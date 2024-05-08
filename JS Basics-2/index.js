function say() {
    var response = prompt("What Is your name??");
    alert("Hellow " + response + "!!!");
}
say();


// peramiter

function says(greeting){
    var responses = prompt("What Is your name??");
    alert(greeting + ", " + responses + "!!!");
}
says("GD m9");

// multiple peramiter

function add(a, b){
    return a + b;
}
console.log( add(20, 30));
console.log( add("Nasif", "Zisha"));

// Arrays []

let name = [ 'nasif', 'zisha', 'khushi', 'ritu' ];
name.push('sohana', 'sadia');
name.pop();
name.pop();
console.log( name);

// Loops

let names = [ 'Sadia', 'Anika', 'Sohana', 'Ritu', 'Khushi', 'Zisha' ];
names.forEach(function(gf) {
    alert(gf);
});

// one-line loops

let fname = [ 'Sadia', 'Anika', 'Sohana', 'Ritu', 'Khushi', 'Zisha' ];

fname.forEach( fname => alert(fname) );

let fnames = [ 'Sadia', 'Anika', 'Sohana', 'Ritu', 'Khushi', 'Zisha' ];
for (let gf of fnames){
    alert(gf);
    console.log(gf);
}
    
// objects store & access {}

let movies = {
    title: 'KGF',
    time: '2pm'
};

alert(movies.title);

let movie = {
    title: 'KGF',
    time: '2pm'
};

movie.status = 'unavailable';
console.log(movie);

let moviesBW = [{
    title: 'KGF',
    time: '2pm',
    status: 'available'
},
{
    title: 'Avengers',
    time: '4pm',
    status: 'unavailable'
},
{
    title: 'Mari',
    time: '6pm',
    status: 'available'
},
{
    title: 'Hero',
    time: '1pm',
    status: 'unavailable'
},
{
    title: 'GF',
    time: '5pm',
    status: 'available'
}];
console.log(moviesBW);

for (let movie of moviesBW){
    if (movie.status === 'available'){
        console.log("The Movie" +" " + movie.title + " " + "plays in" + " " + movie.time);
    }
    else{
        console.log(movie.title + " " + "Sold_Out");
        console.log(`Sorry, The Movie ${movie.title} is Sold_Out`);
    }
}





