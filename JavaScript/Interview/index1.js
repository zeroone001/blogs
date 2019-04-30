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
// == 和 === 有什么区别？
/*
    == 如果对比双方的类型不一样的话，就会进行类型转换
    1. 首先会判断两者类型是否相同。相同的话就是比大小了
    2. 类型不相同的话，那么就会进行类型转换
    3. 会先判断是否在对比 null 和 undefined，是的话就会返回 true
    4. 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
    5. 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
    true转换为1， false转换为0
    6. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，
    是的话就会把 object 转为原始类型再进行判断
*/
// 思考题：看完了上面的步骤，对于 [] == ![] 你是否能正确写出答案呢？
// true
// ![] false




















