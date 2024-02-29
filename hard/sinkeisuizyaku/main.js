let count = 0;

function shuffle() {
  const cardNum = [1, 1, 2, 2, 3, 3, 4, 4];
  for (let i = cardNum.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardNum[i], cardNum[j]] = [cardNum[j], cardNum[i]];
  }
  return cardNum;
}

function createCard(cardNum) {
  const panel = document.getElementById("panel");
  let cards = [];

  for (let i = 0; i < cardNum.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card", "back");

    div.addEventListener("click", (event) => {
      checkCardNum(cardNum[i], event, cards);
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

function restart() {
  alert("終了です！");
  const divClassName = document.getElementsByClassName("card");
  const divArray = Array.from(divClassName);
  divArray.forEach((div) => {
    div.classList.remove("finish");
    div.classList.add("back");
    div.textContent = "";
  });
}

createCard(shuffle());

function checkCardNum(cardNum, e, cards) {
  if (cards.length === 0) {
    e.target.textContent = cardNum;
    cards.push(e.target);
    e.target.classList.remove("back");
  } else if (cards.length === 1 && e.target.classList.contains("back")) {
    e.target.textContent = cardNum;
    cards.push(e.target);
    e.target.classList.remove("back");

    if (cards[0].textContent === cards[1].textContent) {
      count++;

      if (count === 4) {
        setTimeout(() => {
          restart();
        }, 550);
      }
      setTimeout(() => {
        finish(cards);
      }, 500);
    } else {
      setTimeout(() => {
        reverse(cards);
      }, 500);
    }
  }
}
