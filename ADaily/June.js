/*
    周一算法题之「两数之和」

*/
/*
    给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

    你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

    示例：
    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
*/
/*
    Array.entries() 
    Array.indexOf() 
*/

function twoNums (nums, target) {
    const map = {};
    for (const [n, i] of nums.entries()) {
        map[i] = n;
    }

    for (const [n, i] of nums.entries()) {
        let number = target - i;
        if (number in map) {
            return [n, map[number]];
        }
    }
}

function twoNums1 (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (target - n in map) {
            return [i, map[target - n]]
        } else {
            map[n] = i;
        }
    }
}
/*
    请实现一个 add 函数，满足以下功能
    add(1);     // 1
    add(1)(2);      // 3
    add(1)(2)(3)；  // 6
    add(1)(2, 3);   // 6
    add(1, 2)(3);   // 6
    add(1, 2, 3);   // 6
*/


/*
    JS 判断一个对象是否为空？
*/
function isObjEmpty(obj) {
    for (var i in obj) {
        return false
    }
    return true
}
function isObjEmpty (obj) {
    if (JSON.stringify(obj) === '{}') {
        return true
    }
    return false
}
function isObjEmpty (obj) {
    if (Object.keys(obj).length === 0) {
        return true
    }
    return false
}











