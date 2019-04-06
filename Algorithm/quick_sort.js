/*
    快速排序
    nlog^n
    最常用的排序算法
    性能好
    分治
    递归
*/
/*
    1. 在数据集中选择一个元素作为基准
    2，所有小于基准的值，放到左边，大于基准的值放到右边
    3，对左右两边的子集，不断重复第一步和第二部，直到剩下一个元素为止
*/
/*
    arr.sort((a,b) => (b >= a));
    这种排序方式在新版本chrome不行了
*/
const generateRandomArr = require('./generate-random.js');
let _arr = generateRandomArr(5, 5, 100);

let partition = ( left, right) => {
    // 选择中间项作为主元
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        // 找到比pivot大的那个值
        while (arr[i] < pivot) {
            i++;
        }
        // 从后往前找，找到比pivot小的
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j++;
        }
    }
    return i;   
};
let quick = (left, right) => {
    let index;
    if (arr.length > 1) {
        index = partition( left, right);
        if (left < index -1) {
            quick( left, index - 1)
        }
        if (index < right) {
            quick( index, right);
        }
    }
};
// let arr = _arr; 
let quickSort = () => {
    quick(0, arr.length - 1);
    return _arr;
};  

function quickSort2 (_array) {
    if (_array.length <= 1) {
        return _array;
    }
    // let j = Math.floor((_array.length-1)/2);
    // let current = _array[j];
    let current = _array.splice(0, 1); 
    let left = [];
    let right = [];
    for (let i = 0; i < _array.length; i++) {
        // if (i === j) break;
        if (_array[i] < current[0]) {
            left.push(_array[i]);
        } else {
            right.push(_array[i]);
        }
    }
    return quickSort2(left).concat(current, quickSort2(right));
}
console.log(_arr);
// console.log(quickSort2(_arr));

let quickSort3 = (arr) => {
    if (arr.length <= 1) return arr;
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort3(left).concat([pivot], quickSort3(right));
}
console.log(quickSort3(_arr));


