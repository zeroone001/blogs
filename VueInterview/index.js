/*
    nextTick
    在下次dom更新循环结束之后执行延迟回调，可用于获取更新后的dom状态
    生命周期
    _init_
    * initLifecycle/Event, 往vm上挂载各种属性
    * callHook: beforeCreated: 实例刚创建
    * initInjection/initState: 初始化注入和 data 响应性
    * created: 创建完成，属性已经绑定， 但还未生成真实dom
    * 进行元素的挂载： $el / vm.$mount()
    * 是否有template: 解析成render function
        * *.vue文件: vue-loader会将<template>编译成render function
    beforeMount: 模板编译/挂载之前
    执行render function，生成真实的dom，并替换到dom tree中
    mounted: 组件已挂载
update：
    执行diff算法，比对改变是否需要触发UI更新
    flushScheduleQueue
    watcher.before: 触发beforeUpdate钩子    - watcher.run(): 执行watcher中的 notify，通知所有依赖项更新UI
    触发updated钩子: 组件已更新
    actived / deactivated(keep-alive): 不销毁，缓存，组件激活与失活
    destroy:
    beforeDestroy: 销毁开始
    销毁自身且递归销毁子组件以及事件监听
    remove(): 删除节点
    watcher.teardown(): 清空依赖
    vm.$off(): 解绑监听
    destroyed: 完成后触发钩子
*/


















