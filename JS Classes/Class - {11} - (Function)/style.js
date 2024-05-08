sum();
function sum(){
    var a = 10;
    var b = 20;
    var c = a + b; 
    document.write(c);
}

document.write("<br>");
addition(10, 20);
addition(50, 20);
addition(100, 20);
function addition(a , b){
    var add = a + b;
    document.write("the addition of two numbers is: " + add + "<br>");
}

// Return
document.write("<br>");
// var mult = multiplication(10, 20);
document.write("the multiplication of two numbers is: " + multiplication(10, 20) + "<br>");

function multiplication(a , b){
    var ans = a * b;
    return ans;
}
