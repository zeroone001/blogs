/*
    归并排序
    是第一个可以被实际使用的算法
    复杂度nlog^n
    是一种分治算法
    递归
*/
const generateRandomArr = require('./generate-random.js');
let _arr = generateRandomArr(15, 5, 100);

let merge = (left, right) => {
    let arr = [];
    let l = 0;
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            arr.push(left[l++]);
        } else {
            arr.push(right[r++]);
        }
    }
    while (l < left.length) {
        arr.push(left[l++]);
    }
    while (r < right.length) {
        arr.push(right[r++]);
    }
    return arr;
}
let mergeSort = (arr) => {
    const len = arr.length;
    if (len === 1) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, len);
    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(_arr));


