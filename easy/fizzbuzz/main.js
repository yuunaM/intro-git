const button = document.getElementById('add') //ボタン
const result = document.querySelector('.result') //カウント数字の表示要素　
let v = 0;
result.textContent = v

button.addEventListener('click',function() {
    v++;
    if(v % 3 === 0 && v % 5 === 0) {
        result.textContent = 'fizzBuzz(3と5の倍数)'
    } else if(v % 3 === 0) {
        result.textContent = 'fizz(3の倍数)'
    } else if(v % 5 === 0) {
        result.textContent = 'buzz(5の倍数)'
    } else {
        result.textContent = v
    }
}) 




