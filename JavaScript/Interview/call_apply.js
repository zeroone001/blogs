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
    手写一个bind
*/
Function.prototype.bind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeErrow('Error');
    }


    const that = this;
    const args = [...arguments].slice(1);

    return function F() {
        if (this instanceof F) {
            return new that(...args, ...arguments);
        }

        return that.apply(context, args.concat(...arguments));
    }
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
    手写一个promise 简单版本
*/
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Promise (fn) {
    const that = this;
    this.value = null;
    this.state = PENDING;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve (value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(cb => cb(that.value));
        }
    }

    function reject (value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => cb(that.value));
        }
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : v => v;

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled);
        that.rejectedCallbacks.push(onRejected);
    }

    if (that.state === RESOLVED) {
        onFulfilled(that.value);
    }

    if (that.state === REJECTED) {
        onRejected(that.value);
    }
}





