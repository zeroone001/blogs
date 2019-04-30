/*
    手写一个call
*/
Function.prototype.call = function (context, ...rest) {
    if (typeof this !== 'function') {
        throw new TypeErrow();
    }
    context = context || window;
    context.fn = this;
    var result = context.fn(...rest);
    delete context.fn;
    return result;
}

/*
    手写一个apply
*/
Function.prototype.apply = function (context, arr) {
    if (typeof this !== 'function') {
        throw new TypeErrow();
    }
    context = context || window;
    context.fn = this;
    var result;
    if (arr && Object.prototype.toString.call(arr) === '[object Array]') {
        result = context.fn(...arr)
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}
/*
    手写一个promise
*/
function Promise () {
    
}






