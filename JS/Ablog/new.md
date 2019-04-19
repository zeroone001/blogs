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