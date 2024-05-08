function bmiValue(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height * 12;
    height = height *0.025; //Now height on meter

    if (isNaN(weight)){
        alert("Charecter Not Allowed in Weight");
    } else if(isNaN(height)){
        alert("Charecter Not Allowed in Height");
    }
    else{

    var bmivalue = weight / (height * height);
    bmivalue = Math.round(bmivalue);
    document.getElementById("bmi").value = bmivalue;

}


}