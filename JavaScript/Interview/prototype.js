/*
    prototype: 原型， 一个简单的对象， 用于实现对象的属性继承，
    可以简单理解成对象的爹；每个JS对象中都包含一个_proto_的属性
    指向该对象的原型（爹），可以通过obj._proto_ 访问

    构造函数： 可以通过new来 新建一个对象的函数

    实例： 通过构造函数和new创建出来的对象，可以通过_proto_ 指向原型
    再通过_proto_.constructor  指向构造函数

    三者的关系：
    实例.__proto__ === 原型
    原型.constructor === 构造函数
    构造函数.prototype === 原型
    
    补充： 实例.constructor === 构造函数

    原型链： 
    每个对象都有一个_proto_  实现继承和共享属性
    用于： 属性查找和属性继承
*/
/*
    执行上下文：
    执行上下文可以简单的理解为一个对象；
    三个部分：
    变量对象；
    作用域链；
    this 指向；
    类型：
    全局执行上下文，函数执行上下文，eval
*/

/*
    函数声明：
        声明提前： 一个声明在函数体内都是可见的，函数优于变量；


*/
var foo = function () {
    // body...
    console.log('12');
};
(function (argument) {
    // body...
    console.log(foo);
}('2312'))
/*let foo = 1;
(function foo1() {
    foo = 10  // 由于foo在函数中只为可读，因此赋值无效
    console.log(foo)
}()) */
/*
    闭包：
    是函数和生命该函数的词法环境的组合；
    闭包属于一种特殊的作用域，叫静态作用域，
    可以理解为：父函数被销毁的情况下，返回出的子函数的scope中仍然保留着
    单变量对象和作用域链，因此可以继续访问到父级的变量对象，
    这样的函数称为闭包，
    闭包产生的问题：
    多个子函数的scope都指向父级，是完全共享的，因此当父级的变量对象修改时，
    多个子函数同时会受到影响；
    解决：
    可以用函数参数的传入的方式解决；
    可以用setTimeout()
    使用块级作用域，让变量成为自己上下文的属性, 也就是let
    
    在循环中创建闭包，ES2015，let出现之前的一个常见的问题：


*/
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }

  }
}
setupHelp();

function f_bibao(argument) {
    // body...
    var f = 1;
    function private_f(argument) {
        console.log('f', f);
    }
    return private_f;
}
f_bibao();




