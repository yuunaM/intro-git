const selectBtn = document.getElementById('seasonNum');
const viewImg = document.getElementById('viewImg');
const pushBtn = document.getElementById('pushBtn');

let slide = [
    {img: 'img/slide1.png', title: '冬へ'},
    {img: 'img/slide2.png', title: '春へ'},
    {img: 'img/slide3.png', title: '夏へ'},
    {img: 'img/slide4.png', title: '秋へ'},
];

let index = 0;
viewImg.setAttribute('src',slide[0].img);

selectBtn.addEventListener('change', () => {
    index = selectBtn.selectedIndex;
    if (index === 0) {
        viewImg.setAttribute('src',slide[0].img);
    } else if (index === 1) {
        viewImg.setAttribute('src',slide[1].img);
    } else if (index === 2) {
        viewImg.setAttribute('src',slide[2].img);
    } else if (index === 3) {
        viewImg.setAttribute('src',slide[3].img);
    }
});

// let count = 0;
// viewImg.setAttribute('src',slide[count].img);
// pushBtn.textContent = slide[count].title;

// pushBtn.addEventListener('click', () => {
//     if (count === 3) {
//         count = 0;
//     } else {
//         count++;
//     }
//     viewImg.setAttribute('src',slide[count].img);
//     pushBtn.textContent = slide[count].title;
// });

