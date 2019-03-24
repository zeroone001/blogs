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
    

*/







