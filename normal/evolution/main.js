const set = document.getElementById('setBtn');
const reset = document.getElementById('resetBtn');
const imgArea = document.getElementById('showImg');
const imgTag = document.createElement('img');
const imgTag2 = document.createElement('img');
const imgTag3 = document.createElement('img');
const imgTag4 = document.createElement('img');
const txtArea = document.createElement('p');
const txtArea2 = document.createElement('p');
const txtArea3 = document.createElement('p');
const txtArea4 = document.createElement('p');

let element = [
   {img: 'img/evolution1.png', ttr: '原人'},
   {img: 'img/evolution2.png', ttr: '旧人'},
   {img: 'img/evolution3.png', ttr: '新人'},
   {img: 'img/evolution4.png', ttr: '現代人'}
];

set.addEventListener('click', () => {
    imgArea.innerHTML = "";
    imgTag.setAttribute('src',element[0].img);
    imgArea.appendChild(imgTag);
    txtArea.innerHTML = element[0].ttr;
    imgArea.append(txtArea);

    const sum = Math.floor(Math.random() * 11);
    console.log(sum);
    if (sum >= 4) {
        imgTag2.setAttribute('src',element[1].img);
        imgArea.appendChild(imgTag2); 

        txtArea2.innerHTML = element[1].ttr;
        imgArea.append(txtArea2);
    } 
    if (sum >= 7) {
        imgTag3.setAttribute('src',element[2].img);
        imgArea.appendChild(imgTag3); 

        txtArea3.innerHTML = element[2].ttr;
        imgArea.append(txtArea3);
    }
    if (sum >= 9) {
        imgTag4.setAttribute('src',element[3].img);
        imgArea.appendChild(imgTag4); 

        txtArea4.innerHTML = element[3].ttr;
        imgArea.append(txtArea4);
    }
});

reset.addEventListener('click', () => imgArea.innerHTML = "" );
