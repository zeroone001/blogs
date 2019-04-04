/*
    冒泡排序： 两两比较
*/
const generateRandomArr = require('./generate-random.js');
let _arr = generateRandomArr(10, 5, 100);

function buddleSort (arr) {
    // body...
    const len = arr.length;
    for (let i = len; i >= 2; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(buddleSort(_arr));
