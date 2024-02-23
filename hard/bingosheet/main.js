const rows = 6; 
const columns = 5;
const table = document.getElementById('view');
const hitNumBtn = document.getElementById('hitNum');
const columnNum = [[],[],[],[],[]];

const bingoArray = [
    {columnTitle: 'B', min: 1, max: 15},
    {columnTitle: 'I', min: 16, max: 30},
    {columnTitle: 'N', min: 31, max: 45},
    {columnTitle: 'G', min: 46, max: 60},
    {columnTitle: 'O', min: 61, max: 75}
];

for (let i = 0; i < 5; i++) {
    const { min, max } = bingoArray[i];

    while (columnNum[i].length < 6) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
        if (!columnNum[i].includes(randomNum)) {
            columnNum[i].push(randomNum);
        }
    }
}

for (let v = 0; v < 6; v++) {
    const tr = document.createElement('tr');

    for (let i = 0; i < columns; i++) {
        const td = document.createElement('td');
        td.textContent = (v === 3 && i === 2) ? 'free' : columnNum[i][v];

        if (v === 0) {
            const columnTitle = bingoArray[i].columnTitle;
            td.textContent = columnTitle;
        } 

        tr.appendChild(td);
    }
    table.appendChild(tr);
}

hitNumBtn.addEventListener('click', () => {
    
    let hitNum = Math.floor(Math.random() * 75) + 1;
    const searchTd = document.getElementsByTagName('td');

    for (let i = 0; i < searchTd.length; i++) {
        if (searchTd[i].textContent === hitNum.toString()) { // hitNumを文字列に変更
            searchTd[i].classList.add('hit-num');
        }
    }
    console.log(hitNum);
});


// 14行目のfor文と26行目のfor文で数字を作る箇所と26行目のfor文で
// 数字を作る処理と見た目を作る処理が分離されていてわかりやすいと思いました。

// 18行目 ですがconstで書いて問題ないと思います。うまくminとmax使ってまとめられているのいいですね！
// 1、2行目の数字を名前をつけてわかりやすくしている点いいと思います！
// (→何の数字かわからないことをマジックナンバーと言います。マジックナンバーは避けた方がいいので。)
// 分割代入や三項演算子使えているのいいですね！分割代入のメリットはその下の行でそのプロパティが
// 再代入で変更されないことを明示できる+そのプロパティしか使わないことを明示できる点で、
// 私はいいと思います。記述が若干長くなるので、人にもよるかもですが。 