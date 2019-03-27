/*
    https://vuex.vuejs.org/zh/guide/actions.html
*/
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
    mutation 必须是同步函数，因为在回掉函数中进行的状态改变都是不可追踪的；
    Actions可以包含任何的异步操作
    
*/
import { mapActions } from 'vuex';
methods: {
    // 多次调用的话，这样很方便，但是如果只是一次的话，那就没必要了
    ...mapActions([
        'actions' // 将this.actions() 映射为this.$store.dispatch('actions');
    ]) 
}
// 
actions: {
    async actionA ({ commit }) {
        commit('GETDATA', await getData());
    },
    async actionB ({commit, dispatch}) {
        await dispatch('actionA');
        commit('GETOTHERDATA', await getOtherData());
    }
}


















