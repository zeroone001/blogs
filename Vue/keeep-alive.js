/*
    https://juejin.im/post/5b407c2a6fb9a04fa91bcf0d
    https://www.jianshu.com/p/0b0222954483
    
*/
/*
    实现条件缓存：全局的include数组
    上面include的写法不是常用的，因为它固定了哪几个页面缓存或不缓存，假如有下面这个场景：

    现有页面：首页（A）、列表页（B）、详情页（C），一般可以从：A->B->C；
    B到C再返回B时，B要保持列表滚动的距离；
    B返回A再进入B时，B不需要保持状态，是全新的。
    很明显，这个例子中，B是“条件缓存”的，C->B时保持缓存，A->B时放弃缓存。其实解决方案也不难，只需要将B动态地从include数组中增加/删除就行了。具体步骤是：
    在Vuex中定义一个全局的缓存数组，待传给include：

// global.js

export default {
  namespaced: true,
  state: {
    keepAliveComponents: [] // 缓存数组
  },
  mutations: {
    keepAlive (state, component) {
      // 注：防止重复添加（当然也可以使用Set）
      !state.keepAliveComponents.includes(component) && 
        state.keepAliveComponents.push(component)
    },
    noKeepAlive (state, component) {
      const index = state.keepAliveComponents.indexOf(component)
      index !== -1 &&
        state.keepAliveComponents.splice(index, 1)
    }
  }
}
复制代码
在父页面中定义keep-alive，并传入全局的缓存数组：

// App.vue

<div class="app">
  <!--传入include数组-->
  <keep-alive :include="keepAliveComponents">
    <router-view></router-view>
  </keep-alive>
</div>

export default {
  computed: {
    ...mapState({
      keepAliveComponents: state => state.global.keepAliveComponents
    })
  }
}
复制代码
缓存：在路由配置页中，约定使用meta属性keepAlive，值为true表示组件需要缓存。在全局路由钩子beforeEach中对该属性进行处理，这样一来，每次进入该组件，都进行缓存：

const router = new Router({
  routes: [
    {
      path: '/A/B',
      name: 'B',
      component: B,
      meta: {
        title: 'B页面',
        keepAlive: true // 这里指定B组件的缓存性
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 在路由全局钩子beforeEach中，根据keepAlive属性，统一设置页面的缓存性
  // 作用是每次进入该组件，就将它缓存
  if (to.meta.keepAlive) {
    store.commit('global/keepAlive', to.name)
  }
})
复制代码
取消缓存的时机：对缓存组件使用路由的组件层钩子beforeRouteLeave。因为B->A->B时不需要缓存B，所以可以认为：当B的下一个页面不是C时取消B的缓存，那么下次进入B组件时B就是全新的：

export default {
  name: 'B',
  created () {
      // ...设置滚动条在最顶部
  },
  beforeRouteLeave (to, from, next) {
    // 如果下一个页面不是详情页（C），则取消列表页（B）的缓存
    if (to.name !== 'C') {
        this.$store.commit('global/noKeepAlive', from.name)
    }
    next()
  }
}
复制代码因为B的条件缓存，是B自己的职责，所以最好把该业务逻辑写在B的内部，而不是A中，这样不至于让组件之间的跳转关系变得混乱。

一个需要注意的细节：因为keep-alive组件的include数组操作的对象是组件名、而不是路由名，因此我们定义每一个组件时，都要显式声明name属性，否则缓存不起作用。而且，一个显式的name对Vue devtools有提示作用。

另一种方式？
网上看到实现条件缓存的另一种方式很类似，但它是在父组件中，使用两个router-view并进行条件渲染：
// App.vue

<div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>

Q&A
Q：组件名已经加入全局include数组了，为什么页面还是没有缓存到？
A：如果按照上面的思路来做就没有问题，注意第5点，即很有可能你忘记给组件声明一个name属性了。
Q：组件能够缓存，但是滚动条并没有缓存、比如还是会回到顶部？
A：滚动条这个问题跟组件的HTML结构有关。浅显而言，keep-alive功能缓存的是父元素相对于组件的scrollTop，所以如果你的组件/页面设置了height:100%、滚动条在组件内部的，看到的滚动条就是没有缓存的。当然，关于这个，还有待进入源码深究，给自己留个坑吧。

*/
<keep-alive>
    <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    </router-view>
</keep-alive>
export default {
    name: 'b',
    data() {
        return {};
    },
    methods: {},
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
        next();
    }
};
// 在非单页应用的时候，就不能有效的缓存了



