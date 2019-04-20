#### 思考一下new的原理
<!-- father 也就是new后面跟的构造函数 -->
function new1 (father, ...rest) {
    var o = {};
    o._proto_ = father.prototype;
    var o2 = father.apply(o, rest);
    if ( (typeof o2 === 'object' || typeof o2 === 'function') && o2 !== null ) {
    return o2;
    }
    return o;
}
#### 手写call,apply ,bind
```javascript

Function.prototype.call = function (context, ...rest) {
    if (typeof this !== 'function') {
        throw new TypeError();
    }
    context = context || window;
    context.fn = this;
    var result  = context.fn(...rest);
    delete context.fn;
    return result;
}
// apply
Function.prototype.apply = function (context, arr) {
    if (typeof this !== 'function') {
        throw new TypeError();
    }
    context = context || window;
    context.fn = this;
    var result;
    if (arr && Object.prototype.toString.call(arr) === '[object  Array]') {
        context.fn(...arr);
    } else {
        context.fn();
    }
    delete context.fn;
    return result;
}
```

```