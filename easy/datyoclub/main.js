let i = 0;

const cntUp = function() {
    i++
    console.log(i)
};

const repeat = function() {
    const txt = 'おう'
    const action = txt.repeat(i)
    alert(action)
    i = 0
}

const cntDn = function() {
    i--
    if (i < 0) {
        const nullTxt = 'もう誰もいない、、、'
        alert(nullTxt)
        i = 0
    }
}