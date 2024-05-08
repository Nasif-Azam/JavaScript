var x = 0;
var y = 'Nasif';
document.write(x);
document.write("<br>");

f1();

function f1() {
    var x1 = 1;
    var y1 = 'Azam';
    document.write(x);
    document.write("<br>");

    f2();

    function f2() {
        var x2 = 2;
        var y2 = 'Is A';
        document.write(x);
        document.write("<br>");

        f3();

        function f3() {
            var x3 = 3;
            var y3 = 'Web Designer';
            document.write(x);
            document.write("<br>");
            // Climb Up the Scope Chain
            document.write(y3);
            document.write("<br>");
            document.write(y2);
            document.write("<br>");
            document.write(y1);
            document.write("<br>");
            document.write(y);
            document.write("<br>");
        }
    }

}