/*
    数组去重有哪些方法？
*/
/*
    ...扩展运算符， 后面必须是可迭代对象
    将一个数组转为用逗号分隔的参数序列
*/
// const arr = [1,2,2,3,4,4,4,5];
// console.log([...new Set(arr)]);
// Array.from(new Set(arr));
/*
    双层for循环
    原理：从第一个数开始，依次跟后面的数字进行比较，
    如果找到一样的，那么就不管这个数，进行下一个，依次与后面的
    进行比较；
*/
function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // ++i;
                j = ++i;
                console.log('i:', i);
            }
        }
        res.push(arr[i]);
    }   
    console.log(res);
    return res;
}
unique([1,1,1,3,4]);
/*
    方法三： 单层for循环 + indexOf
*/
function unique1(arr) {
    // body...
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            res.push(arr[i]);
        }
    }
    return res;
}
