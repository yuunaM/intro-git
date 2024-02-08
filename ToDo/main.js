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

    // 追加
    li.appendChild(trashBtn);
    list.appendChild(li);
    addArea.value = "";

    // 完了ボタンで削除
    trashBtn.addEventListener('click', () => {
        console.log(list);
        const target = trashBtn.parentNode;
        target.remove();
    });
});



