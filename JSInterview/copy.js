/*
    对象的拷贝
    浅拷贝： 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时会影响原对象；
    Object.assign
    let obj1 = {a: 1};
    let obj2 = Object.assign({}, obj1);
    展开运算符（...）
    var a = [1,2,3];
    let b = [...a];
    b.push('2'); 
    深拷贝：
    1，let obj3 = JSON.parse(JSON.stringify(obj1));
    缺点：
    当值为函数，undefined，symbol时，无法拷贝
    2，递归进行逐一赋值；
*/

/*
    new 运算符的执行过程
    1，新生成一个对象；
    2，链接到原型_proto_
    3, 绑定this

    instanceof 原理
    instance.[__proto__...] === instance.constructor.prototype
    instance.constructor === Object
*/
/*
    代码的复用：
    1，函数封装
    2，apply/call：借用
    3，继承
    4，复制 extend；
    5，混入 mixin

*/



