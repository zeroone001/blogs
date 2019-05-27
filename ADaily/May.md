1. 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'?
```javascript
function processString (s) {
    var arr = s.split('');
    var new_arr = arr.map((item) => {
        return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    });
    return new_arr.join('');
}
console.log(processString('AbC'));
```
#### 输出以下代码运行结果？
```javascript
// example 1
var a={}, b='123', c=123;
a[b]='b';
a[c]='c';
console.log(a[b]);

---------------------
// example 2
var a={}, b=Symbol('123'), c=Symbol('123');
a[b]='b';
a[c]='c';
console.log(a[b]);

---------------------
// example 3
var a={}, b={key:'123'}, c={key:'456'};
a[b]='b';
a[c]='c';
console.log(a[b]);
```
#### 介绍下 Promise.all 使用、原理实现及错误处理
```javascript
const p = Promise.all([p1, p2, p3]);
```
Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

#### 打印出 1 - 10000 之间的所有对称数 例如：121、1331 等
```javascript
[...Array(10000).keys()].filter((x) => {
    return x > 10 && x === Number(x.toString().split('').reverse().join(''))
})
```





