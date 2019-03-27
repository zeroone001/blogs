/*
    state: 状态中心
    mutations: 更改状态；
    actions： 异步更改状态
    getters: 获取状态
    modules： 将state分成多个modules，便于管理
    
*/
/*
    state特性： 
        * 通过mapState把全局的state和getters影射到当前组件的computed中
        * 
    getter:
        * 对state进行计算，是store的计算属性
    mutations：
        * Action提交的是mutation，不是直接变更状态
        * 可以包含异步操作
    
*/