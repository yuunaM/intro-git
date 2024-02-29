const rows = 6;
const columns = 5;
const table = document.getElementById("view");
const hitNumBtn = document.getElementById("hitNum");
const hitNumArea = document.getElementById("hitNumArea");
hitNumArea.innerText = "出た数字：";
let hitNumArray = Array.from({ length: 75 }, (_, index) => index + 1);

const bingoArray = [
  { columnTitle: "B", min: 1, max: 15 },
  { columnTitle: "I", min: 16, max: 30 },
  { columnTitle: "N", min: 31, max: 45 },
  { columnTitle: "G", min: 46, max: 60 },
  { columnTitle: "O", min: 61, max: 75 },
];

function generateRandomNum() {
  const columnNum = [[], [], [], [], []];
  for (let i = 0; i < columns; i++) {
    const { min, max } = bingoArray[i];

    while (columnNum[i].length < rows) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!columnNum[i].includes(randomNum)) {
        columnNum[i].push(randomNum);
      }
    }
  }
  return columnNum;
}

function createBingoSheet(bingoNum) {
  for (let v = 0; v < rows; v++) {
    const tr = document.createElement("tr");

    for (let i = 0; i < columns; i++) {
      const td = document.createElement("td");
      td.textContent = v === 3 && i === 2 ? "free" : bingoNum[i][v];

      if (v === 0) {
        const columnTitle = bingoArray[i].columnTitle;
        td.textContent = columnTitle;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function checkNumberMatch(hitNum) {
  const bingoCells = document.getElementsByTagName("td");

  for (let i = 0; i < bingoCells.length; i++) {
    if (bingoCells[i].textContent === hitNum) {
      bingoCells[i].classList.add("hit-num");
    }
  }
  hitNumArea.innerText = `出た数字：${hitNum}`;
}

createBingoSheet(generateRandomNum());

hitNumBtn.addEventListener("click", () => {
  let index = Math.floor(Math.random() * hitNumArray.length);
  let randomNum = hitNumArray[index];
  const hitNum = randomNum.toString();
  hitNumArray.splice(index, 1);
  checkNumberMatch(hitNum);

  if (hitNumArray.length === 0) {
    alert("終了です！");
  }
});

// フィードバック

// 14行目のfor文と26行目のfor文で数字を作る箇所と26行目のfor文で
// 数字を作る処理と見た目を作る処理が分離されていてわかりやすいと思いました。

// 18行目 ですがconstで書いて問題ないと思います。うまくminとmax使ってまとめられているのいいですね！
// 1、2行目の数字を名前をつけてわかりやすくしている点いいと思います！
// (→何の数字かわからないことをマジックナンバーと言います。マジックナンバーは避けた方がいいので。)
// 分割代入や三項演算子使えているのいいですね！分割代入のメリットはその下の行でそのプロパティが
// 再代入で変更されないことを明示できる+そのプロパティしか使わないことを明示できる点で、
// 私はいいと思います。記述が若干長くなるので、人にもよるかもですが。

// 発展問題フィードバック
// ゲームとしての改善点

// セットボタンを押した時に何の数字が出たのかわからない
// (コンソールでは出ているようなのでアラートで出してあげると良いと思います！)
// セットを押した時に今までにセットを押した時の数値が出てきてしまう
// (ビンゴゲームは通常同じ数字が出ないようになっていると思います！)

// コードしての改善点
// const columnNum = [[],[],[],[],[]];
// のように定義していたとしても形だけ定義しているんだろうということしかわかりません。
// なら、中身に数字の入った二次元配列を作ってしまう関数を用意してその関数名をcreateColumnsNumsという名前にして
// const columnNum = createColumnsNums()
// のようにしてあげた方が、何を定義しているのか直感的に判断しやすい

// ビンゴシートをつくっている処理にviewBingoSheetなどの名前をつけてあげれば
// シートを映し出している処理なんだろうと理解しやすくなります。

// const viewBingoSheet = () => {...}
// const drawBingo = () => {...}
// const createColumnsNumbers = () => {,,,}

// hitNumBtn.addEventListener("click",()=>{
//   const drawnNum = drawBingo()
//   alert(`${drawnNum}がひかれました`)
//   const result = judge(drawnNum)
//   if(result){
//     markBingoCard()
//     //newGameを動かしてもいいかも
//   }
// })
// const newGame = () =>{
//   const columnNum = createColumnsNumbers()
//   viewBingoSheet(columnNum)
// }
// newGame()
