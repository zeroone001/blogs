/*
    函数执行改变this
    obj.fun() this === obj;
    func() 相当于window.func() this === window;

    三种修改this的指向：
    call: fn.call(target, 1, 2);
    apply: fn.apply(target, [1, 2]);
    bind: fn.bind(target)(1, 2);
*/
// 如何正确判断 this？箭头函数的 this 是什么？
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo();
/*
    1.对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window
    2.对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
    3.对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this
*/
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())
/*
    首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind 这类函数是无效的。
    最后种情况也就是 bind 这些改变上下文的 API 了，
    对于这些函数来说，this 取决于第一个参数，如果第一个参数为空，那么就是 window。
*/

let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?
// 相当于
let a = {}
let fn = function () { console.log(this) }
let fn1 = function () {
    return function () {
        return fn.apply();
    }.apply(a)
}
fn1();
/*
    可以从上述代码中发现，不管我们给函数 bind 几次，
    fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window。
*/
let a = { name: 'yck' }
function foo() {
  console.log(this.name)
}
foo.bind(a)() // => 'yck'
/*
    以上就是 this 的规则了，但是可能会发生多个规则同时出现的情况，
    这时候不同的规则之间会根据优先级最高的来决定 this 最终指向哪里。
    首先，new 的方式优先级最高，接下来是 bind 这些函数，
    然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。
*/
