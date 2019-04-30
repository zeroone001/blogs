#### JS tree shaking
依赖的是ES6的模块系统（export和import）
* lodash-es
#### CSS tree shaking
purifycss-webpack
####  处理第三方JS库
```javascript
new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
})
resolve: {
    alias: {
      $: path.resolve(__dirname, 'src/vendor/jquery.min.js')
    }
},
```
#### 热更新
HotModuleReplacementPlugin
