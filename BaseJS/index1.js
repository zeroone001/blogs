/*
    转Boolean
    在条件判断时候，除了 undefined， null， false，
    NaN， ''， 0， -0，其他所有值都转为 true，
    包括所有对象。
*/
/*
    对象转原始类型
    Symbol.toPrimitive 的优先级最高
*/
var a = {
    i: 1,
    valueOf() {
        return a.i++;
    },
    toString() {
        return a.i++;
    },
    [Symbol.toPrimitive]() {
        return a.i++;
    }
}

if ( a == 1 && a == 2 && a == 3 ) {
  console.log(1);
}
/*
    四则运算符
*/
true + true // 2

'a' + + 'b' // 'aNaN'
+'b' === NaN
// 除了加法之外，其他的运算符，只要一方是数字，另一方也会转换为数字
4 * '3' === 12
4 * [1, 2] === NaN
4 * [] === 0
// 比较运算符




















