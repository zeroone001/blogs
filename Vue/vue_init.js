/*
    关于生命周期的一些记录
    
*/
new Vue({})

function _init(argument) {
    // body...
    initlifeCycle(vm);
     // 初始化事件系统，钩子函数等
    initEvent(vm) 
    // 编译slot、vnode
    initRender(vm) 
    // 触发钩子
    callHook(vm, 'beforeCreate')
    // 添加inject功能
    initInjection(vm)
    // 完成数据响应性 props/data/watch/computed/methods
    initState(vm)
    // 添加 provide 功能
    initProvide(vm)
    // 触发钩子
    callHook(vm, 'created')
        
     // 挂载节点
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }

}


