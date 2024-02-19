
// 自力ver
const start = document.getElementById('startTimer');
const confirm = document.getElementById('confirmTime');
let v = 0;

// start.addEventListener('click', function() { 
//     clearInterval(timer);
//     function count() {
//         v++
//         console.log(v)
//     }
//     timer = setInterval(count,1000);

//     confirm.addEventListener('click', function() {
//         if (v === 20) {
//             alert(`ジャスト${v}秒`)
//         } else {
//             alert(`今${v}秒 失敗`)
//         }
//         clearInterval(timer);
//         v = 0
//     });

//     setTimeout(function() {
//         clearInterval(timer);
//         alert('終了')
//         v = 0
//     },30000);
// });

// 【問題1】startボタンを連続で押すとカウントが複数走ってしまうので
//         10行目にclearInterval(timer)を入れたが"Uncaught ReferenceError"というエラーになる
// 【問題2】確認ボタンを押しても30秒後には終了アラートが表示されてしまう
// 【問題3】確認ボタンを押した数だけアラートが表示されてしまう


// 修正ver
let timer;

start.addEventListener('click', function() { 
    clearInterval(timer);
    function count() {
        v++
        console.log(v)
        if (v===30) { // 終了アラートを出すにはv===30か毎回確認する必要があるため、カウントしているところに記載しなければいけない 
            clearInterval(timer);
            alert('終了') 
            v = 0
        }
    }
    timer = setInterval(count,1000); 

    //  timer2 = setTimeout(function() {
    //     clearInterval(timer);
    //     alert('終了')
    //     v = 0
    // },30000);
});

confirm.addEventListener('click', function() {
    if (v === 20) {
        alert(`ジャスト${v}秒`)
    } else {
        alert(`今${v}秒 失敗`)
    }
    // clearTimeout(timer2);
    clearInterval(timer); 
    v = 0
});

// 【解決1】"Uncaught ReferenceError"は値が何も入っていない、見つからないエラー。
//         先に"let timer"を宣言しておけばtimerには"undefine"という値が入る。
//         "clearInterval()"は"undefine"の時は何もしないという命令になるのでこれを有効化するためにも事前に"let timer"の宣言が必須。
// 【解決2】setTimeoutで"startボタンを押してから30秒後に終了アラートなどの処理を開始"という命令が入っているので
//         確認ボタンを押そうが押すまいが30秒後に処理が始まる。確認ボタンを押したら終了アラート表示指示も停止させたい場合は
//         66行目のようにsetTimeoutを変数にしてclearTimeout()を確認ボタンが押されたタイミングで使う。
//         clearTimeout()はsetTimeout()を止める、という意味
// 【解決3】addEventListener{}スコープ中でaddEventListener{}を使っているから。
//         "add"がついているだけあって指示が重複するとその分実行されてしまう。



