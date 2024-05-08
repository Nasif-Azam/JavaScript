// Accessing Element by ID
document.write("<br>");
var a = document.getElementById("1st").innerHTML;
document.write(a + " (by ID)");

// Accessing Element by ClassName
document.write("<br>");
var b = document.getElementsByClassName("2nd")[0].innerHTML;
document.write(b + " (by ClassName)");

// Accessing Element by Tags
document.write("<br>");
var c = document.getElementsByTagName("h3")[2].innerText;
document.write(c + " (by TagName)");

// Accessing First Element
document.write("<br>");
var d = document.querySelector("h3").innerHTML;
document.write(d + " (1st Element)");

// Changing HTML Elements
document.write("<br>");
var e = document.getElementsByClassName("2nd").innerHTML = "a";
document.write(e + " (Changing HTML Elements)");

// Changing HTML Elements
document.write("<br>");
var f = document.getElementById("1st");
f.innerHTML = "Nasif_Azam" + " (Changing HTML Elements)";

// Changing HTML Attributes
var g = document.getElementById("pic").src = "img/1.png";

// Css Style
var h = document.getElementById("pic").style.height = "300px";
var h = document.getElementById("pic").style.width = "400px";

// Date
var i = Date();
document.write("Date & Time: " + i);

// Date
function date(){
    document.getElementById("date").innerHTML = Date();
}

// Change Color by OnClicking Text
function colorcng(j){
    j.style.color = "orange";
}

// toUpperCase
function nameFun(){
    var k = document.getElementById("name");
    k.value = k.value.toUpperCase();
}

