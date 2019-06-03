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
    entries 
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

