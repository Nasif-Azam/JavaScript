var name1 = prompt("What is Player1 Name?");
var name2 = prompt("What is Player2 Name?");
document.getElementById("firstPlayer").innerHTML = name1;
document.getElementById("secondPlayer").innerHTML = name2;

ludogame = () => {
    const player1 = Math.floor(Math.random() * 6) + 1;
    // const player1dice = "img/dice2" + player1 + ".png";
    const player1dice = `img/dice${player1}.png`;
    document.getElementById("check1").setAttribute("src", player1dice);

    const player2 = Math.floor(Math.random() * 6) + 1;
    // const player1dice = "img/dice2" + player2 + ".png";
    const player2dice = `img/dice${player2}.png`;
    document.getElementById("check2").setAttribute("src", player2dice);

    if (player1 > player2) {
        document.querySelector("h2").innerHTML = name1 + " Won!!!";
    } else if (player2 > player1) {
        document.querySelector("h2").innerHTML = name2 + " Won!!!";
    } else {
        document.querySelector("h2").innerHTML = "Draw!!!";
    }

}