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

    if ( // ここはincludes()で同じ数字があるか確認すればもっと短くできそう
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


// フィードバック
// ポイント ⭐️ timers=[]などはletかconstで定義 たまに抜けていることがある
//         ⭐️ 規則性のある処理はforやforEachでまとめるとすっきり
//         ⭐️ 変数や関数はできれば上に書く癖をつける

// ところどころで document.getElementById('nowTime' + num);
// これは重めの処理なので可変変数を使いたいときはこう
// const nowTimes = [
//   document.getElementById('nowTime1'),
//   document.getElementById('nowTime2'),
//   document.getElementById('nowTime3'),
// ];
// let allNum = nowTimes[num-1]; // 配列は0始まりのインデックスのためnum-1

// 23,24行目、変数timesとresultはしっかりletかconstで定義しましょう！
// その書き方をするとwindow.times(グローバルオブジェクト)として定義されたことになり、
// どこからでもアクセスできるので、バグの要因になります。

// 29~37行目、56~70行目、問題ないですが、規則性があるものはfor文で実行した方がよりスッキリします。
// 可読性は多少落ちる場合がありますが、スッキリします。
// for ( let i = 0; i < 8; i++ ) {
//     countStart(i + 1) ;
// }

// 43行目など関数全般、function countStart(){}などfunctionを使っているため
// 書き順は気にしなくてもエラーにならないですが、アロー関数や関数式で宣言している場合は、
// 実行箇所が宣言部より上に来たらエラーになるので、
// 変数や関数はできれば上に書く癖をつけておいた方がいいと思います！

// 質問
// 根本的な解決ではありませんが、
// 一度クリックされたら、全てのストップボタンを押すまで
// クリックできないという力技での解決となってしまいました。

// → やりたいことが実現できていてデメリットが問題にならなければ、その方法でOKです！
// イベントがすでに登録されている場合は登録しないように条件分岐で書くか、
// onclickというプロパティを使ってあげれば重複しないので解決できます。

// if文の簡潔な書き方を発見できなかった

// if文の構造自体はreturnなどを使い、ネストもなくていいと思いました！
// 79~81行目の条件の部分ですが、下記が使えそうです。
// 配列.includes()、配列.some()

// 87~91行目は変数として保持し意味をわかりやすくすることはアリかもです。
// 行数としては少し増えますが読みやすくはなります。
// 規則性はあるので、おそらくfor文を中に入れた関数作ってその関数で判定すればいける気がします。

// 数字が揃った部分だけ色を変えるという簡単な演出を
// クリーンなコードで入れたかったが完結できなかった

// every()関数はtrue,falseしか返さない関数なので、要素自体を取り出すことはできません。
// 配列から条件に一致した要素を取り出したいのであれば、配列.find()が使えます。
// 条件に一致した要素を取り除くならfilter()です。

// 今度は複数の配列に対して.every() をする時の書き方がわからない。
// 親配列.forEach()かmap()でその中で、every()でいけると思います。