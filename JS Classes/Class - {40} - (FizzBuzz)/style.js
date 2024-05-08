for (var i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        document.write("(FizzBuzz) ");

    } else if (i % 3 == 0) {
        document.write("(Fizz) ");

    } else if (i % 5 == 0) {
        document.write("(Buzz) ");

    } else {
        document.write(i);
        document.write(" ");
    }
}

// Store in Array

function myFun() {
    var fizzbuzz = [];
    for (var i = 1; i <= 100; i++) {

        if ((i % 3 == 0) && (i % 5 == 0)) {
            fizzbuzz.push("(FizzBuzz) ");

        } else if (i % 3 == 0) {
            fizzbuzz.push("(Fizz) ");

        } else if (i % 5 == 0) {
            fizzbuzz.push("(Buzz) ");

        } else {
            fizzbuzz.push(i);
            document.write(" ");
        }
    }
    console.log(fizzbuzz);
}
myFun();