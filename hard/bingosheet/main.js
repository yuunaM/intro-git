const rows = 6; 
const columns = 5;
const table = document.getElementById('view');
const columnNum = [[],[],[],[],[]];

const bingoArray = [
    {columnTitle: 'B', min: 1, max: 15},
    {columnTitle: 'I', min: 16, max: 30},
    {columnTitle: 'N', min: 31, max: 45},
    {columnTitle: 'G', min: 46, max: 60},
    {columnTitle: 'O', min: 61, max: 75}
];

for (let i = 0; i < bingoArray.length; i++) {
    const { min, max } = bingoArray[i];

    while (columnNum[i].length < 6) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
        if (!columnNum[i].includes(randomNum)) {
            columnNum[i].push(randomNum);
        }
    }
}

for (let v = 0; v < rows; v++) { // 行
    const tr = document.createElement('tr');

    for (let i = 0; i < columns; i++) { // 列
        const td = document.createElement('td');
        td.textContent = (v === 3 && i === 2) ? 'free' : columnNum[i][v];

        if (v === 0) {
            const { columnTitle } = bingoArray[i];
            td.textContent = columnTitle;
        }

        tr.appendChild(td);
    }
    table.appendChild(tr);
}

