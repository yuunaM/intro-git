// 1. CPに同じ数字が含まれないランダムな3列の数字を生成させる
// 2. inputに自分が予想した文字3列をいれる。
//    同じ数字が2文字以上入っている場合は「同じ数を2回使ってはいけません」アラート
// 3. 「答え合わせ」を押したら結果表示
//    数字自体は合っているが桁の位置が違う ⇒ 「BITE」 
//    数値と桁位置が合っている場合  ⇒ 「EAT」
// 4. 数字があっていたら3EAT

const check = document.getElementById('numCheck');
const txt = [
    document.getElementById('cpNumArea'),
    document.getElementById('result'),
    document.getElementById('remainTurn'),
    document.getElementById('score')
];

let turn = 10;
txt[0].innerHTML = 'CPの数字：';
txt[1].innerHTML = '結果：';
txt[2].innerHTML = `残り回数：${turn}回`;

let recordInput = ''; // 入力文字チェック用
let cpNum = []; // CPの文字列
let myNum = []; // 自分の回答
let totalBite = 0; // 累計用
let totalEat = 0;
let bite;
let eat;


// 重複のないランダムな3桁の数字を生成
function opponent() {
    for (let i = 0; cpNum.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        if (!cpNum.includes(randomNum)) {
            cpNum.push(randomNum);
        }
    }
    txt[0].innerHTML = `CPの数字：${cpNum}`;
}

// eat・biteのチェック
function judge() {
    let biteArray = [];
    bite = 0;
    eat = 0;

    for (let i = 0; i < cpNum.length; i++) {
        if (cpNum[i] === myNum[i]) { // 同じ数字で同じ桁にある場合は変数eatをカウント
            eat++;
            totalEat++;
        } 
        if (cpNum[i] !== myNum[i]) { // eat以外は新たな配列biteArrayに入れてbiteチェックに回す
            biteArray.push(myNum[i]);
        }
        if (eat === 3) { // eatが3つ揃えば3EAT
            txt[1].innerHTML = '3EAT!!';
        }
    }

    cpNum.forEach((element) => { // biteArrayとcpNumでbiteをチェック
        if (biteArray.includes(element)) {
            bite++;
            totalBite++;
        }
    });
}

// 挑戦可能回数
function turnCheck() {
    if (turn <= 1) {
        check.disabled = true;
        txt[2].innerHTML = '終了です！<br> 合計 BITE ' + totalBite + ' EAT ' + totalEat;
    } else {
        turn--;
        txt[2].innerHTML = `残り回数：${turn}回`;
    }
}

check.addEventListener('click', () => {
    const answerNum = document.getElementById('answerNum').value;

    // 入力文字チェック
    if (answerNum.length !== 3 || answerNum.match(/(.)\1/)) {
        alert('同じ数字を含まずに3文字で入力してください');
        return;
    }
    if (recordInput === answerNum) {
        alert('数字変えない作戦ですか！？');
        return;
    } else {
        recordInput = answerNum;
    }

    // チェックに通ったら入力値を配列化しCP用の数字を生成してeat・biteチェックを実行
    myNum = answerNum.split('').map(Number);
    opponent();
    judge();

    // ターンごとの結果表示と残り回数の処理
    txt[1].innerHTML =`結果：${bite} BITE ${eat} EAT`;
    cpNum = [];
    turnCheck();
});
