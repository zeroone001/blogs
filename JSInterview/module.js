/*
    模块化
    我们在浏览器中使用ES6的模块化支持，
    在Node中使用commonjs的模块化支持


    es6: import / export / default export
    commonjs: require / module.exports / exports
    amd: equire / defined

    require import 的区别

    import 必须放在文件的最开始，且前面不能有其他的逻辑代码
    require可以用在代码的任何地方；
    import是编译时候的，reuqire是运行时候的

    Node无法兼容ES6

    import静态编译，require动态加载

    ES6模块与commonJS模块的两个差异：
    commonJS模块输出的是一个值的拷贝；ES6模块输出的是值的引用
    运行时加载；编译时输出接口
    commonJS 加载的是一个对象，只有在脚本运行完才会生成
    ES6模块不是对象，只是静态定义，在代码静态解析阶段就会生成

    commonjs 输出的是值的拷贝，一旦输出，内部再变化也影响不到这个值
    ES6模块不会缓存结果，总是去被加载的模块取值，并且变量总是绑定其所在
    的模块；这个变量是只读的，重新赋值会报错；可以对对象添加属性，但是
    赋值就会报错；
    1， require支持动态导入；import不支持
    2， require是同步导入；import属于异步导入
    3， require是值拷贝，导出值变化会不会影响导入值；
    import是指向内存地址，导入值变化会随着导出值变化

*/
/*
    函数防抖：将多次高频操作放在最后一次执行；




*/
function debounce(fn, wait, immediate) {
    // body...
    let time = null;
    return function () {
        // body...
        let argu = arguments;
        let context = this;
        console.log(arguments);

        if (immediate && !time) {
            fn.apply(context, argu);
        }
        if (time) clearTimeout(time);
        time = setTimeout(function () {
            // body...
            fn.apply(context, argu);
        }, wait);

    }
}
debounce(function () {
    console.log('111')
}, 1000);
/*
    节流： 每隔一段时间后执行
*/
function throttle (fn, wait, immediate) {
    // body...
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



