const btn = [
    document.getElementById('player1Btn'),
    document.getElementById('player2Btn')
]
const dice = [
    document.getElementById('setPlayer1dice'),
    document.getElementById('setPlayer2dice')
]
const resultTxt = document.getElementById('result');
const newGameBtn = document.getElementById('newGame');
let array = [];
btn[1].disabled = true;

dice.forEach((dice) => {
    dice.setAttribute('src', `/img/saikoro1.png`);
});

function diceRoll(player) {
    let num;
    let timer = setInterval(() => {
        num = Math.floor(Math.random()* 6) + 1;
        dice[player].setAttribute('src', `/img/saikoro${num}.png`);
    },100);

    setTimeout(() => {
        clearInterval(timer);
        judgeAndResult(num);
    },3000);    
}

function judgeAndResult(point) {
    array.push(point);
    console.log(array);
    if (array[0] > array[1]) {
        resultTxt.innerHTML = 'プレイヤー1の勝ち';
        return
    } else if (array[0] < array[1]) {
        resultTxt.innerHTML = 'プレイヤー2の勝ち';
        return
    } else if (array[0] === array[1]) {
        resultTxt.innerHTML = '引き分け';
        return
    }
}

newGameBtn.addEventListener('click', () => {
    resultTxt.innerHTML = '???';
    btn[0].disabled = false;
    dice.forEach((dice) => {
        array = [];
        dice.setAttribute('src', `/img/saikoro1.png`);
    });
});

btn[0].addEventListener('click', () => {
    diceRoll(0);
    btn[1].disabled = false;
    btn[0].disabled = true;
});

btn[1].addEventListener('click', () => {
    diceRoll(1);  
    btn[1].disabled = true;    
});