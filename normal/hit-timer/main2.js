// スタートと確認ボタンを押したそれぞれのタイミングで現在時刻を取得し、
// 何秒間あいだが空いているのかを計算できるようにしてみましょう

// ① スタートボタンを押す。2回目以降に押した場合は途中からスタート
// ② カウントスタート
// ③ 確認ボタンを押しアラート表示 
// ④ 現在の秒数を取得し、20秒とどれだけ離れているか計算
//   　分岐 {丁度20秒であれば 差異0 20秒ジャスト！}
//   　分岐 {1〜19秒であれば 差異⚪︎ まだ⚪︎秒、、}
//   　分岐 {21〜29秒であれば 差異◇ もう◇秒、、}
// ⑤  タイマー停止、カウントを0に

const confirm2 = document.getElementById('confirmTime2');
const start2 = document.getElementById('startTimer2');
const val = document.getElementById('val');
let v = 0;
let timer;

start2.addEventListener('click', () => {
    clearInterval(timer);
    function count() {
        v++
        val.textContent = v;
        if (v===30) {
            alert('終了');
            v = 0;
            clearInterval(timer);
        }
    }
    timer = setInterval(count,1000);
});

confirm2.addEventListener('click', () => {
    let shift = v - 20;
    if (v===20) {
        alert(`ジャスト${v}秒！差異：${shift}`)
    } else if (v >= 20) {
        alert(`もう${v}秒、、差異：${shift}`)
    } else if (v <= 20) {
        alert(`まだ${v}秒、、差異：${shift}`)
    }
    clearInterval(timer);
    v = 0;
})

