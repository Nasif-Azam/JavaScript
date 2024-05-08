var marks = 80;

if (marks == 75){
    document.write("You got A+");
}
else{
    document.write("You got A");
}
// Class - 06
document.write("<br>");
var a = 1;
var b = "1";
document.write(a);
document.write(" " + "type:--" + typeof(a));

document.write("<br>");
document.write(b);
document.write(" " + "type:--" + typeof(b));

document.write("<br>");
if(a === b){
    document.write("Both Are Equal");
} 
else{
    document.write("Both Are Not Equal");
}

document.write("<br>");
var a = 5;
var b = 10;
var c = 4;
var sum = a + b;
// c = c + sum;
c += sum; //ShortHand
document.write(sum);
document.write("<br>");
document.write(c);
