/*
    $route 和 $router 的区别
    $router 为 VueRouter 实例，想要导航到不同 URL，则使用 $router.push 方法。
    $route 为当前 router 跳转对象里面可以获取 name 、 path 、 query 、 params 等。
*/
/*
    NextTick 是做什么的?
    $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM。
*/
/*
    Vue 组件 data 为什么必须是函数
    因为 JS 本身的特性带来的，如果 data 是一个对象，
    那么由于对象本身属于引用类型，
    当我们修改其中的一个属性时，会影响到所有 Vue 实例的数据。
    如果将 data 作为一个函数返回一个对象，
    那么每一个实例的 data 属性都是独立的，不会相互影响了。
*/