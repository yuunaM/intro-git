const addArea = document.getElementById('add-area');
const addBtn = document.querySelector('.add-btn');
const list = document.getElementById('todo');
let addTxtValue;

addBtn.addEventListener('click', () => {
    addTxtValue = addArea.value;

    if (addTxtValue.length === 0) { // 空欄なら処理終了
        alert('空欄です！');
        return;
    }

    // リスト作成
    const li = document.createElement('li'); 
    li.textContent = addTxtValue;

    // 完了ボタン作成
    const trashBtn = document.createElement('button');
    trashBtn.textContent = "完了";

    // リストとボタンを追加
    li.appendChild(trashBtn);
    list.appendChild(li);
    addArea.value = "";

    // 完了ボタンで削除
    trashBtn.addEventListener('click', () => {
        const target = trashBtn.parentNode;
        target.remove();
    });
});

// ここは難しい部分なのですが、アロー関数についてのthisについてです。
// こちらはthisの振る舞いがアロー関数とfunctionで違うということです。

// そもそもforEachを使わず一つだけボタン作り、それにaddEventlistenerする方法に変えたのですね！
// そうするとthisを使う必要がなくなるので、シンプルな方法になります。
// ただ、forEachを使ったやり方もなしではなく、改善策はあります。
// ②ですが、addEventListenerはこう言う場面では入れ子にするべきではないですね。
// とのことでしたが、今回の問題はそれが根本の原因ではないと思います。
// イベントが複数登録されなければいいので、forEachかつaddEventListenerを使っても使わなくても
// 解消する方法は何通りかあります。
