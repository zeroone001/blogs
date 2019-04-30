/*
    手写一个符合Promise/A+ 的 promise
*/
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Promise (fn) {
    const that = this;
    this.value = null;
    this.state = PENDING;
    this.resolveCallback = [];
    this.rejectCallback = [];

    function resolve (value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            // 执行
            that.resolveCallback.map(cb => cb(that.value));
        }
    }

    function reject (value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;

            that.rejectCallback.map(cb => cb(that.value));
        }
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
Promise.prototype.then = function (resolveFun, rejectFun) {
    const that = this;

    resolveFun = typeof resolveFun === 'function' ? resolveFun : v => v ;
    rejectFun = typeof rejectFun === 'function' ? rejectFun : v => v;

    if (that.state === PENDING) {
        that.resolveCallback.push(resolveFun);
        that.rejectCallback.push(rejectFun);
    }

    if (that.state === RESOLVED) {
        resolveFun(that.value);
    }

    if (that.state === REJECTED) {
        rejectFun(that.value);
    }
};

