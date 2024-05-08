const setOfWords = ["I am studying at Green University",
    "I live in Bangladesh",
    "I'm a CSE diploma engineer",
    "I love my Ammu Jaan a lot",
    "My Apu Moni is a great gift from Allah"
];
const headMsg = document.getElementById('msg');
const typedWord = document.getElementById('mywords');
const startBtn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNum = Math.floor(Math.random() * setOfWords.length);
    headMsg.innerText = setOfWords[randomNum];
    let date = new Date();
    startTime = date.getTime();
    startBtn.innerText = "Calculate My Speed";
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalStr = typedWord.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    console.log(speed);
    let finalMsg = 'You typed total at ' + speed + " words per minute ";
    finalMsg += compareWords(headMsg.innerText, totalStr);
    headMsg.innerText = finalMsg;

}

const compareWords = (str1, str2) => {
    let words1 = str1.split(' ');
    let words2 = str2.split(' ');
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++
        }
    });
    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords);
}

const wordCounter = (str) => {
    let response = str.split(' ').length;
    console.log(response);
    return response;
}


startBtn.addEventListener('click', function () {
    if (this.innerText == 'Ready To Typing') {
        typedWord.disabled = false;
        playGame();
    } else if (this.innerText = 'Calculate My Speed') {
        typedWord.disabled = true;
        startBtn.innerText = 'Ready To Typing';
        endGame();
    }
});