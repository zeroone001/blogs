/*
    Proxy 可以实现什么功能？
*/
let p = new Proxy(target, handler);
let onWatcher = (obj) => {
    let handler = {
        get (target, property, receiver) {
            console.log('receiver', receiver);
            return Reflect.get(target, property, receiver);
        },
        set (target, property, value, receiver) {
            console.log('value', value);
            console.log('receiver', receiver);
            return Reflect.set(target,property, value);
        }
    }
    return new Proxy(obj, handler);
}
let o = {a: 1};
let p = onWatcher(o);
/*
    Vue3.0使用的原因：
    无需一层层的为每个属性添加代理，性能上更好；
    并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，
    唯一缺陷可能就是浏览器的兼容性不好了。
*/




