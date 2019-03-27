/*
    数据响应有两部分构成： watcher和依赖收集器
    核心是defineProperty
    可以重写属性的get和set 方法，从而监听到数据的改变

*/
class Dep {
    constructor () {
        this.subs = [];
    }
    addSub (sub) {
        this.subs.push(sub);
    }
    clSub () {
        console.log(this.subs);
    }
    notify () {
        this.subs.map(sub => {
            sub.update();
        });  
    }
}
let data = {
    a: 1
};

// 
function Observe(obj) {
    // body...

    Object.keys(obj).map((key) => {
        defineReactive(obj, key, obj[key])
    })
}
function defineReactive(obj, k ,v) {
    // body...
    if (typeof v === 'object') Observe(obj);
    // 依赖收集器
    let dep = new Dep();
    Object.defineProperty(obj, k, {
        enumberable: true,
        configurable: true,
        get () {
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return v;
        },
        set (newV) {
            v = newV;
            dep.notify(); 
        }
    })

}   
class Watcher {
    constructor(obj, key, cb) {
        Dep.target = this
        this.cb = cb
        this.obj = obj
        this.key = key
        this.value = obj[key]
        Dep.target = null
    }
    addDep(Dep) {
        Dep.addSub(this)
    }
    update() {
        this.value = this.obj[this.key]
        this.cb(this.value)
    }
    before() {
        callHook('beforeUpdate')
    }
}
new Watcher(data, 'name', updateComponent)
data.a = 2

















