/*
    a为什么的时候，会打印1？
*/
/*
var a = ?
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}
*/

/*
    answer: 这个题考查的类型的隐式转换，
    引用类型在比较运算符的时候，会调用本类型的toString或者valueOf
    方法

*/
var a = {
    i: 1,
    toString () {
        return a.i++;
    }
}
var a = {
    i: 1,
    valueOf () {
        return a.i++;
    }
}
var a = [1,2,3];
a.toString = a.shift;

Object.defineProperty(window, 'b', {
    get () {
        return this.value ? (this.value+=1) : 1;
    }
}) 






