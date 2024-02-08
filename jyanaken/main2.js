// 1 プレイヤー1のじゃんけんを選ぶ
// 2 決定を押す
// 3 player1のテキストに「セット完了」を表示
// 4 プレイヤー2のじゃんけんを選ぶ
// 5 決定を押す
// 6 player2のテキストに「セット完了」を表示し、じゃんけんプルダウン横も「両者セット完了」を表示
// 7 いざ勝負！！！を押す
//   player1,2のどちらか、もしくはどちらもじゃんけんが選択されていない場合はアラート
//   player1が買ったら「player1の勝ち」
//   player2が買ったら「player2の勝ち」
//   引き分けなら「引き分けなら」表示
//   player1,2の「セット完了」が無くなる
//   じゃんけんプルダウン横がplayer1の選択モードになる

const player = document.getElementById('player');
const playerHand = document.getElementById('playerHand');
const setHand = document.getElementById('setHand');
const player1 = document.getElementById('player1Hand'); 
const player1img = document.getElementById('player1img'); 
const player2 = document.getElementById('player2Hand'); 
const player2img = document.getElementById('player2img'); 
const start = document.getElementById('gameStart');
const log = document.getElementById('log');
const setComp = 'セット完了';
const area1 = document.getElementById('player1Area'); 
const area2 = document.getElementById('player2Area'); 

let click = 0;
player1img.setAttribute('src','img/first.png');
player2img.setAttribute('src','img/first.png');

setHand.addEventListener('click', () => {
    click++;

    if (click === 1) {
        playerIndex = playerHand.selectedIndex; // player1の値
        player1.innerHTML = `player1：${setComp}`;
        player.innerHTML = "player2";
        playerHand[0].selected = true;
    } else if (click === 2) {
        playerIndex2 = playerHand.selectedIndex;  // player2の値
        player2.innerHTML = `player2：${setComp}`;
        player.innerHTML = "両者セット完了";
        playerHand[0].selected = true;
    } else {
        alert('セットできるのは2回までです');
    }
});

start.addEventListener('click', () => {
    area1.classList.remove('draw','win');
    area2.classList.remove('draw','win');

    switch (playerIndex) {
        case 1 : {
            if (playerIndex2 === 1) {
                playerDraw();
            } else if (playerIndex2 === 2) {
                player1Win();
            } else if (playerIndex2 === 3) {
                player2Win();
            }
            break;
        }
        case 2 : {
            if (playerIndex2 === 1) {
               player2Win();
            } else if (playerIndex2 === 2) {
                playerDraw();
            } else if (playerIndex2 === 3) {
                player1Win();
            }
            break;
        }
        case 3 : {
            if (playerIndex2 === 1) {
                player1Win();
            } else if (playerIndex2 === 2) {
                player2Win();
            } else if (playerIndex2 === 3) {
                playerDraw();
            }
            break;
        }
    }

    click = 0;
    player1img.setAttribute('src', `img/${playerIndex}.png`);
    player2img.setAttribute('src', `img/${playerIndex2}.png`);
    player1.innerHTML = "player1";
    player2.innerHTML = "player2";
    player.innerHTML = "player1";
    playerHand[0].selected = true;
});

function player1Win() {
    log.innerHTML = "player1の勝ち";
    area1.classList.add('win');
}

function player2Win() {
    log.innerHTML = "player2の勝ち";
    area2.classList.add('win');
}

function playerDraw() {
    log.innerHTML = "引き分け";
    area1.classList.add('draw');
    area2.classList.add('draw');
}