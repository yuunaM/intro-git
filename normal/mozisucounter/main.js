const textArea = document.getElementById('sampleForm');
const num = document.getElementById('textCounter');
const reset = document.getElementById('resetBtn');
const strDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');
let count;
num.textContent = 'あと400文字';

function inputTyp() {
    typCount();
    if (count === 0) {
        num.textContent = 'あと400文字';
    } else if (count >= 400) {
        textArea.disabled = true;
        num.textContent = 'これ以上打てません';
    }
}

function resetClick() {
    textArea.innerHTML = '';
    num.textContent = 'あと400文字';
    textArea.disabled = false;
}

function delClick() {
    textArea.value = textArea.value.slice(1);
    typCount();
}

function endClick() {
    textArea.value = textArea.value.slice(0,-1);
    typCount();
}

function typCount() {
    num.textContent = `あと${400 - textArea.value.length}文字`;
}

strDel.addEventListener('click',delClick);
endDel.addEventListener('click',endClick);
reset.addEventListener('click',resetClick);


// reset.addEventListener('click', () => {
//     textArea.innerHTML = '';
//     num.textContent = 'あと400文字';
//     textArea.disabled = false;
// });

// strDel.addEventListener('click', () => {
//     typCount();
//     textArea.value = textArea.value.slice(1);
//     // textArea.value = del
//     // num.textContent = `あと${400 - textArea.value.length}文字`;
// });





