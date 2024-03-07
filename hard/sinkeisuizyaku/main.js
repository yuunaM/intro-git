let count = 0;
const cardNum = [1, 1, 2, 2, 3, 3, 4, 4];

function shuffle() {
  for (let i = cardNum.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardNum[i], cardNum[j]] = [cardNum[j], cardNum[i]];
  }
}

function createCard() {
  const panel = document.getElementById("panel");
  let cards = [];

  for (let i = 0; i < cardNum.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card", "back");

    div.addEventListener("click", (event) => {
      cardOpen(cardNum[i], event.target, cards);
    });

    panel.appendChild(div);
  }
}

function finish(cards) {
  cards.forEach((cardNum) => {
    cardNum.classList.add("finish");
  });
  cards.length = 0;
}

function reverse(cards) {
  cards.forEach((cardNum) => {
    cardNum.classList.add("back");
    cardNum.textContent = "";
  });
  cards.length = 0;
}

function cardOpen(cardNum, target, cards) {
  if (cards.length === 0) {
    target.textContent = cardNum;
    cards.push(target);
    target.classList.remove("back");
  } else if (cards.length === 1 && target.classList.contains("back")) {
    target.textContent = cardNum;
    cards.push(target);
    target.classList.remove("back");
    checkCardNum(cards);
    playerChange(cards);
  }
}

const player1 = document.getElementById("player1Point");
const player2 = document.getElementById("player2Point");
let player1Point = 0;
let player2Point = 0;
player1.textContent = `player1：${player1Point}`;
player2.textContent = `player2：${player2Point}`;

function checkCardNum(cards) {
  if (cards[0].textContent === cards[1].textContent) {
    count++;
    playerPoint(count);

    setTimeout(() => {
      finish(cards);
    }, 500);
  } else {
    setTimeout(() => {
      reverse(cards);
    }, 500);
  }
}

const nextPlayer = document.getElementById("nextPlayer");
let currentPlayer = 1;
nextPlayer.textContent = `次はplayer${currentPlayer}の番です`;

function playerChange(cards) {
  if (cards[0].textContent !== cards[1].textContent) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    nextPlayer.textContent = `次はplayer${currentPlayer}の番です`;
  }
}

function playerPoint(count) {
  if (currentPlayer === 1 && count) {
    player1Point++;
    player1.textContent = `player1：${player1Point}`;
  } else if (currentPlayer === 2 && count) {
    player2Point++;
    player2.textContent = `player2：${player2Point}`;
  }

  if (count === 4) {
    setTimeout(() => {
      if (player1Point > player2Point) {
        alert("プレイヤー1の勝ち！");
      } else if (player1Point < player2Point) {
        alert("プレイヤー2の勝ち！");
      } else {
        alert("同点！");
      }
      restart();
    }, 550);
  }
}

function restart() {
  const divClassName = document.getElementsByClassName("card");
  const divArray = Array.from(divClassName);
  divArray.forEach((div) => {
    div.classList.remove("finish");
    div.classList.add("back");
    div.textContent = "";
  });

  player1Point = 0;
  player2Point = 0;
  player1.textContent = `player1：${player1Point}`;
  player2.textContent = `player2：${player2Point}`;

  currentPlayer = 1;
  nextPlayer.textContent = `次はplayer${currentPlayer}の番です`;
}

createCard(shuffle());

// 処理を作ってから関数名を考えてみる。
// どのタイミングで実行させ対価を考えてみる
// 再利用性を高めるとどれだけのメリット・デメリットがあるのか考える
//
