const start = document.getElementById('startTimer'); 
const stop1 = document.getElementById('setTime1');
const stop2 = document.getElementById('setTime2');
const stop3 = document.getElementById('setTime3');

const nowTimes = [
    document.getElementById('nowTime1'),
    document.getElementById('nowTime2'),
    document.getElementById('nowTime3'), 
    document.getElementById('nowTime4'),
    document.getElementById('nowTime5'),
    document.getElementById('nowTime6'),
    document.getElementById('nowTime7'),
    document.getElementById('nowTime8'),
    document.getElementById('nowTime9')
];

// 初期数字設定
nowTimes[0].textContent = nowTimes[1].textContent = nowTimes[2].textContent = 9;
nowTimes[3].textContent = nowTimes[4].textContent = nowTimes[5].textContent = 0;
nowTimes[6].textContent = nowTimes[7].textContent = nowTimes[8].textContent = 1;

timers = []; 
result = [];
stop1.disabled = stop2.disabled = stop3.disabled = true;

// スタートボタンを押したらカウントスタート
start.addEventListener('click', () => {
    countStart(1);
    countStart(2);
    countStart(3);
    countStart(4);
    countStart(5);
    countStart(6);
    countStart(7);
    countStart(8);
    countStart(9);
    stop1.disabled = stop2.disabled = stop3.disabled = false;
    start.disabled = true;
});

// カウントの処理
function countStart(num) {
    timers[num] = setInterval(function() {
        let allNum = nowTimes[num-1];
        if (allNum.textContent > 8) {
            allNum.textContent = 0;
        } else {
            allNum.textContent ++
        }
    },350);
}

// ストップ1, 2, 3が押されたらそれぞれカウントがストップ
stop1.addEventListener('click', () => {
    countStop(1);
    countStop(4);
    countStop(7);
});

stop2.addEventListener('click', () => {
    countStop(2);
    countStop(5);
    countStop(8);
});

stop3.addEventListener('click', () => {
    countStop(3);
    countStop(6);
    countStop(9);
});

// ストップ後の処理
function countStop(num) {
    clearInterval(timers[num]);
    result[num] = nowTimes[num-1].innerText;

    if ( // どれかの数字が一つでもundefinedだったら処理終了
        result[1] === undefined || result[2] === undefined || result[3] === undefined
        || result[4] === undefined || result[5] === undefined || result[6] === undefined
        || result[7] === undefined || result[8] === undefined || result[9] === undefined
        ) {
        return;
    }

    if (
        result[1] === result[2] && result[2] === result[3] // 上、真ん中、下の各横一列、もしくは斜めのどれかが揃えば成功
        || result[4] === result[5] && result[5] === result[6]
        || result[7] === result[8] && result[8] === result[9]
        || result[1] === result[5] && result[5] === result[9]
        || result[3] === result[5] && result[5] === result[7]
        ) {
        alert('成功！');
    } else {
        alert('失敗！');
    }
    
    result = [];
    start.disabled = false;
    stop1.disabled = stop2.disabled = stop3.disabled = true;
}
