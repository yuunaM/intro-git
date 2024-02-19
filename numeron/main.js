// 1. CPに同じ数字が含まれないランダムな3列の数字を生成させる
// 2. inputに自分が予想した文字3列をいれる。
//    同じ数字が2文字以上入っている場合は「同じ数を2回使ってはいけません」アラート
// 3. 「答え合わせ」を押したら結果表示
//    数字自体は合っているが桁の位置が違う ⇒ 「BITE」 
//    数値と桁位置が合っている場合  ⇒ 「EAT」
// 4. 数字があっていたら3EAT

const check = document.getElementById('numCheck');
const resultArea = document.getElementById('result');
const remain = document.getElementById('remainTurn');
const newGameBtn = document.getElementById('newGame');
newGameBtn.style.display = "none";
remain.innerHTML = '残り回数：10回';
let cpNum = [];
let turn = 10;

// 重複のないランダムな3桁の数字を生成
function randomNumber() {
    for (let i = 0; cpNum.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        if (!cpNum.includes(randomNum)) {
            cpNum.push(randomNum);
        }
    }
}
randomNumber();

// ターン毎の履歴を作成
function TurnHistory(result) {
    const p = document.createElement('p');
    p.innerHTML = result;
    resultArea.appendChild(p);
}

// 入力値のチェック
function validation() {
    const answerNum = document.getElementById('answerNum');
    if (answerNum.value.length !== 3 || answerNum.value.match(/(.)\1/)) {
        alert('同じ数字を含まずに3文字で入力してください');
        return;
    }
    TurnHistory(answerNum.value); // 自分の回答を履歴表示用関数に渡す
    const myNum = answerNum.value.split('').map(Number); // 比較する用に自分の回答を配列化
    judge(myNum);
}

// EAT BITEのチェック
function judge(myNum) {
    let biteArray = []; // biteチェック用の配列
    let bite = 0;
    let eat = 0;

    for (let i = 0; i < cpNum.length; i++) {
        if (cpNum[i] === myNum[i]) {
            eat++;
        } 
        if (cpNum[i] !== myNum[i]) { // 桁と数字が合致しているもののみ取り除いた新たな配列biteArrayを作成
            biteArray.push(myNum[i]);
        }
    }

    cpNum.forEach((element) => { // biteArrayとcpNumを比較し、biteをチェック
        if (biteArray.includes(element)) {
            bite++;
        }
    });

    if ( eat < 3 || bite < 0 ) {
        TurnHistory(`${bite} BITE ${eat} EAT`);
    } else {
        TurnHistory('!!!3EAT!!!');
        newGame();
    }
}

// ターンのカウント
function checkTurn() {
    if (turn <= 1) {
        remain.innerHTML = `終了です！答えは${cpNum}でした`;
        newGame();
    } else {
        turn--;
        remain.innerHTML = `残り回数：${turn}回`;
    }
}

// ニューゲーム
function newGame() {
    newGameBtn.style.display = "block";
    newGameBtn.addEventListener('click', () => {
        newGameBtn.style.display = "none";
        cpNum = [];
        randomNumber();
        turn = 11; // 83行目のturn--でマイナスされるので11で渡す
        checkTurn();
        for (let i = resultArea.children.length - 1; i >= 0; i--) {
            resultArea.removeChild(resultArea.children[i]);
        }
    });
}

// 答え合わせをクリックで各関数実行
check.addEventListener('click', () => {
    validation();
    checkTurn();
    answerNum.value = '';
});


