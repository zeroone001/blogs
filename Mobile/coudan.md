##### 凑单

#### recommend-group
* get-recome-url 搜索组件
* 搜索在本地是不起作用的，因为使用了获取登陆状态的JSONP请求
* 如果要打开弹窗，需要把mounted 里面的测试代码注释打开
* 函数 getSessionString() 使用了sessionStorage
* <transition name="slide-fade"> Vue 里面的组件[过渡](https://cn.vuejs.org/v2/guide/transitions.html) css 有写对应的类名
* <float-window @closeWindow="closeWindow" v-if="showFlWindow"> 使用了slot插入真实内容 弹窗相关的组件
* getProductDetail 这个函数是关键
* 点击“加入组合”，调用函数recommendBtn就是往数组this.groupItems加数据
* 数据格式
```javascript
{
    title: 'YOSHIKAWA 吉川 乡技燕三条 木柄炒锅 33cm木柄',
    subtitle: '原价：120元 ',
    pic_url: 'http://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'
}
```
* recommendBtn函数里面也有测试代码，需要打开
#### reason.vue

* 推荐理由页面
* 如果在recommend-group这个页面调试过了，数据就会放入sessionStorage,这样打开reason页面，
就会有数据了
* vue-awesome-swiper 使用了这个插件
* 弹窗就是这个组件
* common-btn 发布按钮 组件

