var name = prompt("what is your name?");
if (name != "") {
    alert("hi!!! " + name + " nice to meet you");
} else{
    alert("hi!!! " + "___" + " nice to meet you");
}

document.write("<br>");

// confirm
function myfun() {
    var user_con = confirm("Do you want to visit my Facebook page");
    if (user_con == true) {
        window.open("https://www.facebook.com/md.nasif850");
        return true;
    } else {
        document.write("User don't want to visit my Facebook page");
        return false;
    }
}