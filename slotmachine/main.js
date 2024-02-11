const start = document.getElementById('startTimer');
const stop1 = document.getElementById('setTime1');
const stop2 = document.getElementById('setTime2');
const stop3 = document.getElementById('setTime3');

timers = []; 
result = [];
stop1.disabled = stop2.disabled = stop3.disabled = true;

// スタートボタンを押したらカウントスタート
start.addEventListener('click', () => {
    countStart(1);
    countStart(2);
    countStart(3);
    stop1.disabled = stop2.disabled = stop3.disabled = false;
});

// カウントの処理
function countStart(num) {
    timers[num] = setInterval(function() {
        let allNum = document.getElementById('nowTime' + num);
        if (allNum.textContent > 8) {
            allNum.textContent = 0;
        } else {
            allNum.textContent ++
        }
    },250);
}

// ストップ1, 2, 3が押されたらそれぞれカウントがストップ
stop1.addEventListener('click', () => {
    countStop(1);
});

stop2.addEventListener('click', () => {
    countStop(2);
});

stop3.addEventListener('click', () => {
    countStop(3);
});

// ストップ後の処理
function countStop(num) {
    clearInterval(timers[num]);
    result[num] = document.getElementById('nowTime' + num).innerText;

    if (result[1] === undefined || result[2] === undefined || result[3] === undefined) {
        return;
    }

    if (result[1] === result[2] && result[2] === result[3]) {
        alert('成功！');
    } else {
        alert('失敗！');
    }

    result = [];
    stop1.disabled = stop2.disabled = stop3.disabled = true;
}



