// 発展問題
// 1 プレイヤー1のじゃんけんを選ぶ
// 2 決定を押す
// 3 player1のテキストに「セット完了」を表示
// 4 プレイヤー2のじゃんけんを選ぶ
// 5 決定を押す
// 6 player2のテキストに「セット完了」を表示し、じゃんけんプルダウン横も「両者セット完了」を表示
// 7 いざ勝負！！！を押す
//   player1,2のどちらか、もしくはどちらもじゃんけんが選択されていない場合はアラート
//   player1が勝ったら「player1の勝ち」
//   player2が勝ったら「player2の勝ち」
//   引き分けなら「引き分け」表示
//   player1,2の「セット完了」が無くなる
//   じゃんけんプルダウン横がplayer1の選択モードになる

const player = document.getElementById('player'); // セレクトボタン横のplayer名
const playerHand = document.getElementById('playerHand'); // じゃんけんのセレクトボタン
const setHand = document.getElementById('setHand'); // 決定ボタン
const player1 = document.getElementById('player1Hand');  //「〇〇 セット完了」と表示されるところの player1
const player1img = document.getElementById('player1img'); // player1のじゃんけん結果画像が表示されるエリア
const player2 = document.getElementById('player2Hand');   //「〇〇 セット完了」と表示されるところの player2
const player2img = document.getElementById('player2img'); // player2のじゃんけん結果画像が表示されるエリア
const start = document.getElementById('gameStart'); // いざ勝負 ボタン
const log = document.getElementById('log'); // 「〇〇勝ち」と表示されるエリア
const area1 = document.getElementById('player1Area');  // style反映用にplayer1,2の親divを取得
const area2 = document.getElementById('player2Area'); 

let click = 0;
player1img.setAttribute('src','img/first.png'); // 初回は画像エリアにハテナ画像を表示
player2img.setAttribute('src','img/first.png');

setHand.addEventListener('click', () => {
    click++; // setHandのクリック回数によってplayer1,2の値取得を判断

    if (click === 1) {
        playerIndex = playerHand.selectedIndex; // player1の値
        player1.innerHTML = 'player1：セット完了';
        player.innerHTML = "player2";
        playerHand[0].selected = true; // 何を選んだかplayer2にわからないように選択後は「何出す？」を表示
    } else if (click === 2) {
        playerIndex2 = playerHand.selectedIndex;  // player2の値
        player2.innerHTML = 'player2：セット完了';
        player.innerHTML = "両者セット完了";
    } else {
        alert('セットできるのは2回までです');
    }
});

start.addEventListener('click', () => {
    area1.classList.remove('draw','win'); // 勝ち、引き分け演出用のクラスを削除
    area2.classList.remove('draw','win');

    switch (playerIndex) {
        case 1 : {
            if (playerIndex2 === 1) {
                playerDraw(); // 引き分け専用関数を実行
            } else if (playerIndex2 === 2) {
                player1Win(); // player1の勝ち専用関数を実行
            } else if (playerIndex2 === 3) {
                player2Win(); // player2の勝ち専用関数を実行
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
    player1img.setAttribute('src', `img/${playerIndex}.png`); // player1,2のじゃんけん画像を表示
    player2img.setAttribute('src', `img/${playerIndex2}.png`);
    player1.innerHTML = "player1";
    player2.innerHTML = "player2";
    player.innerHTML = "player1";
    playerHand[0].selected = true; // 「何出す？」を表示
});

function player1Win() { // player1 勝ち専用関数
    log.innerHTML = "player1の勝ち";
    area1.classList.add('win');
}

function player2Win() { // player2 勝ち専用関数
    log.innerHTML = "player2の勝ち";
    area2.classList.add('win');
}

function playerDraw() { //引き分け専用関数
    log.innerHTML = "引き分け";
    area1.classList.add('draw');
    area2.classList.add('draw');
}
<<<<<<< HEAD

// 改善点
// 決定ボタンを"何をだす"のタイミングでおせてしまう
// いざ勝負のボタンもいつでも押せる

// 要素の取得についてですが、現状すべて個別でidをつけてそれぞれを取ってくるという書き方になっています。
// こちらは確かに確実で想像しやすい書き方なのですが、読む際に変数が多くなってしまい、読みにくくなります。
// なので、例えば、複数のタグを一括で取ってきて同じ処理を施す部分をforEachなどを使ってまとめると良いかと思います！

// 次にplayerIndexの定義ですが、ここは単純でletとかで定義しておくといいと思います！
// 定義していないと意図せずglobalな変数となってしまい意図しない挙動を起こすことがありますので注意しましょう！

// 次に判定に関してですが、"じゃんけん 判定 アルゴリズム"などで検索するとよりよい実装が思いつくかもしれません！
// 最後関数の定義ですが、現在player1Winとplayer2Winという2つの関数がありますが、
// たしかに複数の処理をまとめるということはできているのですが、
// この2つを更にまとめることでよりplayerWin関数などが作れると思います。チャレンジしてみてほしいです！

// 動作上気になった点については一度どうしたらいいかなど考えてみていただけると良いかなと思いますので問題提起で終わろうとおもいます！
// 具体的にどう変えればいいかについては今回割愛したので、一度考えてみておもいつかなければ再度聞いていただければと思います！
=======
>>>>>>> refs/remotes/origin/main
