/*
    Vue 组件
    访问： https://segmentfault.com/a/1190000018554874?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com&share_user=1030000000178452
*/
/*
    驼峰命名的props需要转为短横线命名分割
    <my-component warning-text="提示信息"></my-component>
*/

/*
    props
*/
/*<div id="app">
    <input type="text" v-model="parentMessage">
    <my-component :message="parentMessage"></my-component>
</div>

props: ['message'],
template: `<div>{{message}}</div>`,

data: {
    parentMessage: ''
}*/
/*<div id="app">
    <my-component :width="100"></my-component>
</div>

Vue.component('my-component', {
    props: ['width'],
    template: `<div :style="style">组件内容</div>`,
    computed: {
        style: function () {
            return {
                width: this.width + 'px'
            }
        }
    }
});*/
/*
slot
*/
<div id="app">
    <child-component>
        <p>分发的内容</p>
        <p>更多分发的内容</p>
    </child-component>
</div>

Vue.component('child-component', {
    template: `
    <div>
        <slot>
           <p>如果没有父组件插入内容，我将作为默认出现。</p>
        </slot>
    </div>
            `,
});
var app = new Vue({
    el: '#app',
});

/*
    作用域组件， 列表插槽
*/
<div id="app">
    <my-list :book="books">
        <!--作用域插槽也可以是具名的Slot-->
        <template slot="book" scope="props">
            <li>{{props.bookName}}</li>
        </template>
    </my-list>
</div>

Vue.component('my-list', {
    props: {
        books: {
            type: Array,
            default: function () {
                return [];

            }
        }
    },
    template: `
<ul>
    <slot name="book" v-for="book in books" :book-name="book.name"></slot>
</ul>
    `,
});
/*
    递归组件
*/
<div id="app">
    <child-component :count="1"></child-component>
</div>

Vue.component('child-component', {
    name: 'child-component',
    props: {
        count: {
            type: Number,
            default: 1
        }
    },
    template: `
<div class="child">
    <child-component :count="count+1" v-if="count<3"></child-component>
</div>
    `,
});
/*
    动态组件
*/
<div id="app">
    <component :is="currentView"></component>
</div>

var Home = {
    template: `<p>Welcome home!</p>`
};

var app = new Vue({
    el: '#app',
    data: {
        currentView: Home
    }
});







