// Print Whole Page
function wholepage(){
    window.print();
}

// Particular Page Print
function myFun(idvalue){
    var backup = document.body.innerHTML;
    var content = document.getElementById(idvalue).innerHTML;
    document.body.innerHTML = content;
    window.print();
    document.body.innerHTML = backup;
}