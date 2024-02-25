const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];

const N = array.length;
const K = Math.floor(Math.random() * N);

newArray.push(array[K]);

console.log(newArray);