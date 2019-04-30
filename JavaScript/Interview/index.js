/*
    函数柯里化、
    预置通用参数， 可以反复调用
*/
const add = function (y) {
    // body...
    return function (x) {
        // body...
        return x + y;
    }
}
let funAdd = add(1);

console.log(funAdd(2));
console.log(funAdd(4));





