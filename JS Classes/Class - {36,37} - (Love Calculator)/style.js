function loveCal() {

    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    if (name == "") {
        alert("Please Enter Your Name");
    } else if (name.length <= 2) {
        alert("Name Should be 3 Letters");
    } else if (!isNaN(name)) {
        alert("Only Charecter Allowed");
    } else if (lname == "") {
        alert("Please Enter His/Her Name");
    } else if (lname.length <= 2) {
        alert("Name Should be 3 Letters");
    } else if (!isNaN(lname)) {
        alert("Only Charecter Allowed");
    }
    
    else{
    var loveData = Math.random() * 100;
    loveData = Math.floor(loveData);
    document.getElementById("lovevalue").value = loveData + "%";
    }
}