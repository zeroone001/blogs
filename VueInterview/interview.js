/*
    Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？
*/
/*
    一、如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。
    二、如果被其他地方复用，这个很大几率上是需要的，
    如果需要，请将请求放入action里，方便复用，并包装成promise返回，
    在调用处用async await处理返回的数据。
    如果不要复用这个请求，那么直接写在vue文件里很方便。
*/
/*
    计算属性如何使用：
        依赖于data中，数据变化，计算属性就会重新执行，视图也会更新
    计算属性的set和get怎么使用？
        平常就是用默认的get来读取一个计算属性，如果需要手动修改计算属性的时候，
        可以用到setter
    watch 如何使用
        watch 是监听的变量；当变量发生变化的时候，调用对应的方法；

*/
/*
    1, v-if v-show 区别？
        v-if是条件渲染，按照条件判断是否渲染，v-show是display的block或者none；
    2, Vue的核心？
        数据驱动，组件系统
    3, v-on 可以绑定多个方法吗？
        可以的；
    4, key的作用：
        更高效的渲染虚拟DOM 
    $route和$router的区别?
        $route 是路由信息对象，包含，path, name, query, hash, matched;
        
        $router是路由实例， 包含了路由的跳转方法和钩子函数；
        常用： this.$router.push() 用来跳转；this.$router.go(-1);

    






*/