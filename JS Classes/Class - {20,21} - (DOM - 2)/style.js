// Access Children of Body
var child = document.body.children;
console.log(child);

// Add a New Child in Body
document.write("<br>");
var para = document.createElement("p");
var text = document.createTextNode("A new Paragrap");
para.appendChild(text);
console.log(para);
document.body.appendChild(para);

// Access 1st & last Child
var list = document.querySelector("ul");
console.log(list);
console.log(list.firstChild);
console.log(list.lastChild);

// Access All Child
var list = document.querySelectorAll("ul li");
console.log(list);

// Siblings
var sibling = nasif.nextElementSibling.nextElementSibling;
console.log(sibling);

// Parent
var parent = document.querySelector("li");
console.log(parent.parentNode);

// CSS in Javascript
// One by One
document.getElementById('oneBy').style.color = "red"; 

// All in One
document.getElementById('allIn').setAttribute(
    "style",
    "color: darkcyan; background-color: goldenrod; text-align: center; height: 100px; line-height: 100px;"
);

