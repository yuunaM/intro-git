// ① テキストエリアに時間を入力
// ② 変更ボタンを押す
// ③ 秒数を下に反映させる
// ④ スタートでカウントダウンスタート
// ⑤ 0になったらストップアラート表示
// ⑥ ストップで停止
// ⑦ ストップ押した後にスタートでまたスタートできる


const setBtn = document.getElementById('setTime'); // 変更ボタン
const startBtn = document.getElementById('startTimer'); // スタートボタン
const stopBtn = document.getElementById('stopTimer'); // ストップボタン
const nowTime = document.getElementById('nowTime'); // 現在時刻とセット時間
const input = document.getElementById('inputTime');
let sec = 10;
let timer;
let hour
let min
let second
let now

startBtn.disabled = true;
stopBtn.disabled = true;

setBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = false;
    sec = input.value;
    vewTimer();
    nowTime.textContent = now + '：セット完了です';
});

startBtn.addEventListener('click', () => {
    function countDown() {
        vewTimer();
        sec--;
        nowTime.textContent = now;
        console.log(sec);
        if (sec <= 0) {
            alert('終了');
            sec = 0;
            clearInterval(timer);
        }
    }
    timer = setInterval(countDown,1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    nowTime.textContent = now + '：ストップしました';
});

function vewTimer() {
    hour = Math.floor(sec / 3600);
    min = Math.floor(sec % 3600 / 60);
    second = sec % 60;
    now = `${hour}時間 ${min}分 ${second}秒`;
}