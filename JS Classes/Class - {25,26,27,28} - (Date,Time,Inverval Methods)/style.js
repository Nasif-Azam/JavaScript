// Dynamic Clock
var clock;

function startFun() {
    clock = setInterval(clockTime, 1000);
}

function clockTime() {
    var a = new Date();
    var b = a.toLocaleTimeString();
    document.getElementById('time').innerHTML = b;
}

function stopFun() {
    clearInterval(clock);
}

// setTimeout
document.write("<br>");
var e = setTimeout(timer, 2000);
function timer() {
    alert("WellCome to My WebSite");
}

// Clock Attributes
var a = new Date();
document.write(a);
document.write("<br>");
document.write(a.toString());
document.write("<br>");
document.write(a.toUTCString());
document.write("<br>");
document.write(a.toLocaleString());
document.write("<br>");
document.write(a.toDateString());
document.write("<br>");
document.write(a.toLocaleDateString());
document.write("<br>");
document.write(a.toTimeString());
document.write("<br>");
document.write(a.toLocaleTimeString());
document.write("<br>");
document.write(a.toISOString());
document.write("<br>");
document.write(a.toJSON());

// Entering Own Year/Month/Date/Hr/Min/Sec
document.write("<br>");
var b = new Date(98, 1, 09, 10, 32, 07);
document.write(b);

// Get Year/Month/Date
document.write("<br>");
var dateObj = new Date();
var year = dateObj.getUTCFullYear();
var month = dateObj.getUTCMonth() + 1;
var date = dateObj.getUTCDate();
var hr = dateObj.getHours();
var min = dateObj.getUTCMinutes();
var sec = dateObj.getUTCSeconds();
var miliSec = dateObj.getUTCMilliseconds();
document.write(year + "/" + month + "/" + date + "{" + hr + ":" + min + ":" + sec + ":" + miliSec + "}");

// Set Own Year/Month/Date
document.write("<br>");
var b = new Date();
b.setMonth(11);
b.setFullYear(2020);
b.setDate(20);
document.write(b);

// Set Time
document.write("<br>");
var c = new Date();
var d = c.getTime();
document.write(d);
document.write("<br>");
var hr = c.getHours();
var min = c.getMinutes();
var sec = c.getSeconds();
document.write(hr + " : " + min + " : " + sec);

