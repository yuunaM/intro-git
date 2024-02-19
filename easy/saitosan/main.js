// 斉藤さんゲーム　if文
// const btn = document.getElementById('btn')
// const result = document.querySelector('.result')

// btn.addEventListener('click', function() {
//     let count = Math.floor(Math.random()*10)

//     if ( count < 5 ) {
//         result.innerHTML = 'ぺっぺっぺー';
//     } else if ( count > 6 ) {
//         result.innerHTML = '斎藤さんだぞ';
//     }

//     console.log(count)
// })



// 斉藤さんゲーム 三項演算子ver
const result = document.querySelector('.result')

const setBtn = function() {
    const count = Math.floor(Math.random() *10)
    count < 5 ? result.innerHTML = 'ぺっぺっぺー' : result.innerHTML = '斎藤さんだぞ'
}
