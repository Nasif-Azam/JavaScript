// "use strict"

function sum(a, b) {
    let add = a + b; // Var not detect
    console.log("Sum of two Num : "+add);
    console.log(this);
}
sum(5, 10);

const info = {
    name: "Nasif Azam",
    qualif: "CSE Eng",
    partner: function(){
        console.log(this.name);
        let love = "Nasif & Khushi";
        console.log("Lovers : " + love);
        console.log(this);

        function GF(){
            let name = "Ishrat";
            console.log("GF 1st name : "+ name);
            console.log(this);
        }
        GF();
    }
}
info.partner();