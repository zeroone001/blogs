/*
    插入排序
    将元素插入已经排好序的前面的数组中
    相当于有两个数组，每次都跟前面的有序的数组的最后一个开始比较
*/
const generateRandomArr = require('./generate-random.js');

let _arr = generateRandomArr(10, 5, 100);

function InsertSort (arr) {
    const len = arr.length;
     for (let i = 1; i < len; i++) {
        // for (let j = i; j > 0; j--) {
        //     if (arr[j] < arr[j-1]) {
        //         [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        //     } else {
        //         break;
        //     }
        // }
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        }
     }
     return arr;
}

console.log(InsertSort(_arr));