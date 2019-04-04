/*
    一，选择排序，两两比较
*/
const generateRandomArr = require('./generate-random.js');
// console.log(generateRandomArr(10, 5, 50));
let _arr = generateRandomArr(10, 5, 100);
// 选择排序： 遍历自身以后的元素，最小的元素跟自己调换位置
function SelectionSort (arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
function SelectionSort2 (arr) {
    // body...
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        arr[i] = arr[minIndex];
    }
    return arr;
}
console.log(SelectionSort2(_arr).sort((a, b) => b - a));













