// 1 初期ps表示
// 2 現在のpsを入力
// 3 新しいpsを8文字以上で入力
// 4 変更をクリック
//   現在のpsが間違っている場合、入力されていない場合は「古いpsが間違っています」アラート
//   新psが8文字以下の場合「8文字以上で入力してください」アラート
//   現在のpsと新psが同じの場合は「同じパスワードはつかえません！」アラート
// 5 「新しいpsは〇〇です」アラート
// 6 初期ps表示位置に新ps表示

const psArea = document.getElementById('nowPassword');
const confirmPs = document.getElementById('confirmPassword'); 
const changePs = document.getElementById('newPassword'); 
const set = document.getElementById('setPassword'); 
let fastPs = 'aaaaa';
let newPs;
psArea.innerHTML =`現在のパスワード ${fastPs}`;
// const regexp = /^\d{3}-\d{4}$/;
// const regexp = /(.)\1/;
const regexp = /abc/;

set.addEventListener('click', () => {
    genPs = confirmPs.value;
    newPs = changePs.value;
    // const isFastPsAndGenPs = fastPs === genPs;

    // if (fastPs === genPs && 8 <= newPs.length && newPs !== genPs) { // 2つの方が1より厳密
    //     alert(`新しいパスワードは${newPs}です`);
    //     psArea.innerHTML =`現在のパスワード ${newPs}`;
    //     fastPs = newPs;
    // } else if (newPs.length < 8 ) {  // else if の条件は本来は省けるのでもっと読みやすくスマートにできると良い
    //     alert('8文字以上で入力してください');
    // } else if (genPs === newPs) {
    //     alert('同じパスワードはつかえません！');
    // } else if (fastPs === genPs) {
    //     alert('古いパスワードが間違っています');
    // }

    // 教材ver ネクトは見づらい
    // if (fastPs === genPs) {
    //     if (8 <= newPs.length) {
    //         if (newPs != genPs) {
    //             alert(`新しいパスワードは${newPs}です`);
    //             psArea.innerHTML =`現在のパスワード ${newPs}`;
    //             fastPs = newPs;
    //         }

    //     } else {
    //         alert('8文字以上で入力してください');
    //     }

    // } else {
    //     alert('古いパスワードが間違っています');
    // }

    // クリーンコードver
    // if (newPs.length < 8) {
    //     alert('8文字以上で入力してください');
    //     return;
    // } 
    if (newPs.match(regexp)) {
        alert('連続した文字列は使えません');
        return;
    } else if (fastPs !== genPs) {
        alert('古いパスワードが間違っています');
        return;
    } else if (newPs === genPs) {
        alert('同じパスワードはつかえません！');
        return;
    } 
    alert(`新しいパスワードは${newPs}です`);
    psArea.innerHTML =`現在のパスワード ${newPs}`;
    fastPs = newPs;
});


