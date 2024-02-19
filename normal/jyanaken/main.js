const myHand = document.getElementById('myHand');
const start = document.getElementById('gameStart');
const cpHand = document.getElementById('cpHand');
const answer = document.getElementById('log');

let result1;
let result2;
let result3;

start.addEventListener('click', () => {
    const myHandIndex = myHand.selectedIndex;
    val = Math.floor(Math.random() * 3);
    
    if (myHandIndex === 0) {
        result1 = "結果：引き分け";
        result2 = "結果：勝ち";
        result3 = "結果：負け";
        choice();
    } else if (myHandIndex === 1) {
        result1 = "結果：負け";
        result2 = "結果：引き分け";
        result3 = "結果：勝ち";
        choice();
    } else if (myHandIndex === 2) {
        result1 = "結果：勝ち";
        result2 = "結果：負け";
        result3 = "結果：引き分け";
        choice();
    }

    // switch文 ver
    // if (val === 0) {
    //     cpHand.innerHTML = "相手の手：グー👊";
    // } else if (val === 1) {
    //     cpHand.innerHTML = "相手の手：チョキ✌️";
    // } else if (val === 2) {
    //     cpHand.innerHTML = "相手の手：パー✋"
    // }

    // switch (myHandIndex) {
    //     case '0': {
    //         if (val === 0) {
    //             answer.innerHTML = "結果：引き分け";
    //         } else if (val === 1) {
    //             answer.innerHTML = "結果：勝ち";
    //         } else if (val === 2) {
    //             answer.innerHTML = "結果：負け";
    //         }
    //         break;
    //     } 
    //     case '1': {
    //        ・・・
    //     } 
    // }
});

function choice() {
    if (val === 0) {
        cpHand.innerHTML = "相手の手：グー👊";
        answer.innerHTML = result1;
    } else if (val === 1) {
        cpHand.innerHTML = "相手の手：チョキ✌️";
        answer.innerHTML = result2;
    } else if (val === 2) {
        cpHand.innerHTML = "相手の手：パー✋";
        answer.innerHTML = result3;
    }
}