/*
    基础排序算法
*/
/*
    一，冒泡排序，两两比较
*/
/*
    获取任意两个数之间的随机数
*/

// Math.round(Math.random() * (max - min) + min); //四舍五入
// 生成一个随机数组
function generateRandomArr(n, rangeL, rangeR) {
    // body...
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num_random = Math.round(Math.random() * (rangeR - rangeL) + rangeL); //四舍五入
        arr.push(num_random);
    }
    return arr;
}
// console.log(generateRandomArr(10, 5, 50));
let _arr = generateRandomArr(10, 5, 50);
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

console.log(SelectionSort(_arr));













