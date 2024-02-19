// const result = document.getElementById("result")
// result.setAttribute('src', '/img/saikoro1.png')

// const diceRoll = function() {
//     let timer = setInterval(randomlyChangeTheImage, 100);
//     setTimeout(() => {
//     clearInterval(timer);
//   }, 3000);
// }

// const randomlyChangeTheImage = function() {
//     diceNum = `/img/saikoro${Math.floor(Math.random()*6) + 1}.png`;
//     result.setAttribute('src', diceNum); // 関数に登録する範囲はどうすれば自然に思いつくか。
// };

// eval('console.log("hello")')
// setIntervalの第一引数は文字列でもOKだがセキュリティー的に非推奨

const diceImg = document.getElementById('result');
const diceBtn = document.getElementById('diceBtn');
diceImg.setAttribute('src', `/img/saikoro1.png`);

const diceRoll = function() {
    let num = Math.floor(Math.random()* 6) + 1;
    diceImg.setAttribute('src', `/img/saikoro${num}.png`);
}

diceBtn.addEventListener('click', () => {
    let timer = setInterval(diceRoll,100)
    setTimeout(() => {
        clearInterval(timer);
    },3000);
});


