/*
    第 50 题：实现 (5).add(3).minus(2) 功能。
    例： 5 + 3 - 2，结果为 6
*/
Number.prototype.add = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this + number;
};
Number.prototype.minus = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this - number;
};

console.log((5).add(3).minus(2));