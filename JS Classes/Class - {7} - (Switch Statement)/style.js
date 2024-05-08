function btnFun(){
    var choice = document.getElementById("choices").value;
    
    switch(choice){
        case "add" : 
                         var a = 5; 
                         var b = 10;
                         var sum = a + b;
        document.write("Addition off tow numbers is :-" + sum);
        break;

        case "sub", "Sub" : 
                         var a = 5; 
                         var b = 10;
                         var sub = a - b;
        document.write("Subtraction off tow numbers is :-" + sub); 
        break;

        case "mult", "Mult" : 
                         var a = 5; 
                         var b = 10;
                         var multp = a * b;
        document.write("Multiplication off tow numbers is :-" + multp); 
        break;

        default : alert("You Enter Invalid Input");
    }
}