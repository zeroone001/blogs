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
module.exports = generateRandomArr;