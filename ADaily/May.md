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
#### 算法题「移动零」，给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
```javascript
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```
```javascript
function moveZero (arr) {
    let j = 0;
    let len = arr.length;
    for (let i = 0; i < len - j; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1);
            i--;
            j++;
        }
    }
}
```
#### var、let 和 const 区别的实现原理是什么
var 和 let 用以声明变量，const 用于声明只读的常量；

var 声明的变量，不存在块级作用域，在全局范围内都有效，let 和 const 声明的，只在它所在的代码块内有效；

let 和 const 不存在像 var 那样的 “变量提升” 现象，所以 var 定义变量可以先使用，后声明，而 let 和 const 只可先声明，后使用；

let 声明的变量存在暂时性死区，即只要块级作用域中存在 let，那么它所声明的变量就绑定了这个区域，不再受外部的影响。

let 不允许在相同作用域内，重复声明同一个变量；

const 在声明时必须初始化赋值，一旦声明，其声明的值就不允许改变，更不允许重复声明；

如 const 声明了一个复合类型的常量，其存储的是一个引用地址，不允许改变的是这个地址，而对象本身是可变的。




