// Array
var gf = ['Sadia','Anika','Sohana','Ritu','Khushi','Zisha'];
var classes = ['5th','6th','8th','11th','12th','14th'];
var years = ['5','1','1','.6','2','running'];
document.write(gf[0]);

// Array Length
document.write("<br>");
// var num = gf.length;
document.write(gf.length);

// Array Methods
// sort
document.write("<br>");
gf.sort();
document.write(gf);
// POP
document.write("<br>");
gf.pop();
document.write(gf);
// PUSH
document.write("<br>");
gf.push("Unknow");
document.write(gf);
// Shift
document.write("<br>");
gf.shift();
document.write(gf);
// Unshift
document.write("<br>");
gf.unshift("Notborn");
document.write(gf);
// Reverse
document.write("<br>");
gf.reverse("Notborn");
document.write(gf);
// Reverse
document.write("<br>");
var gf_names = Array.isArray(gf);
document.write(gf_names);
// Concat
document.write("<br>");
document.write(gf.concat(classes).concat(years));
// indexof
document.write("<br>");
document.write(gf.indexOf("Khushi"));

