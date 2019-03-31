/*
    实现子元素的水平垂直居中？
    https://juejin.im/post/5c83f7d15188257e566edcf1?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com
*/
/*
    1, display: grid; justify-self: center;
    align-self: center;
    2, line-height: 1;,text-align: center;
    3, dispaly: table; display:table-cell; vertical-


*/


/*
    Q: 尽可能多的方式实现三栏布局，要求.main在中间显示
    <div class="container">
      <div class="main"></div>
      <div class="sub"></div>
      <div class="extra"></div>
    </div>
    A: 
    1，浮动
    2，flex 布局
    3, display: grid; grid-column: 2/3;


*/
/*
    Q: 执行下面的代码，输出结果是什么？

*/
console.log(+false) // 0
console.log(+true) // 1
console.log(1 + '2' + 3 + '4') // '1234' 遇到字符串就会拼接
console.log(4 + 3 + 2 + '1') // '91' 先加在一起最后拼接
/*
    Q: 运行下面代码输出什么？

*/
var x = 3;
var foo = {
    x: 1,
    baz: {
        x: 2,
        bar: function (argument) {
            // body...
            return this.x;
        }
    }
}
var go = foo.baz.bar;
// 在非严格模式下是3，在严格模式下是undefined
// node 默认是严格模式？
console.log(go()); // 3
console.log(foo.baz.bar()); // 2
/*
    实现以下函数，使得输入的字符串逆序输出
    function reverse(str) {
      let res = str.split('');
      return res.reverse().join('');
    }

reverse('hello world!'); // output: '!dlrow olleh'

*/
// String.prototype.reverse = function () {
//     // body...
//     let res = this.split('');
//     return res.reverse().join('');
// }

const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve();
        }, time);
    });
}
(async () => {
    console.log(1);
    await sleep(2000);
    console.log(2);
})();
/*
    函数节流
*/
const throFun = () => {
    console.log('123');
}
function throttle (fn, wait, immediate) {
    // body...
    if (typeof fn !== 'function') {
        throw 'error';
    }
    let timer = null;
    let nowI = immediate;
    return function () {
        let context = this;
        let argu = arguments;
        // body...
        if (nowI) {
            fn.apply(context, argu);
        }
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, argu);
                clearTimeout(timer)
            }, wait);
        }
    }
}
document.addEventListener('scroll', throttle(throFun, 3000)); 
/*
    Q:实现debounce函数
    document.addEventListener('scroll', debounce(throFun, 3000)); 

*/
function debounce(fun, delay) {
    var timer = null;
    return function () {
        // body...
        var _this = this;
        var arg = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun.apply(_this, arg);
        }, delay);
    }
}












