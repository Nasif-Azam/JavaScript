function reverseStr(){
    var str = document.getElementById("reverse").value;
    
    var newStr = "";
    for(var i = str.length - 1; i>=0; i--){
        newStr += str[i];
    }

    document.getElementById("showReverse").value = newStr;

}