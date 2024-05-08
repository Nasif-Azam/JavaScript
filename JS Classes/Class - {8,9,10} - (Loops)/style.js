// Print to 100
document.write("While-Loop");
document.write("<br>");
var i = 1;
while (i <= 40){
    document.write(i);
    i++;
}

// Table of 4
document.write("<br>");
document.write("While-loop Table of 4");
document.write("<br>");
var i = 4;
var j = 1;
while(i <= 40){
    document.write("4" + "*" + j + " = " + i);
    i += 4;
    j++;
    document.write("<br>");
}

// Do-While
document.write("<br>");
document.write("Do-While");
document.write("<br>");
var i = 21;
do{
    document.write(i);
    i++;
}
while(i <= 20);

// For-Loop
document.write("<br>");
document.write("For Loop");
document.write("<br>");
var a;
for(a=1; a<20; a++){
    document.write(a);
}
// // Table of 4
document.write("<br>");
document.write("For Loop Table of 7");
document.write("<br>");
var i;
var j = 1;
for(i=7; i<=70; i+=7){
    document.write("7" + "*" + j + " = " + i);
    document.write("<br>");
    j++
}