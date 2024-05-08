var guestName = ["guest1","guest2","guest3","guest4","guest5","guest6","guest7","guest8","guest9","guest10"];

var name = prompt("What is your name??");

var checkName = guestName.includes(name);

if (checkName == true){
    alert("Wellcome!! " + name + " you are invited");
} else{
    alert("Sorry!! " + name + " you are not invited");
}