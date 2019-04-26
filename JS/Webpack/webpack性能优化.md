#### 减少webpack打包时间
loader: 'babel-loader?cacheDirectory=true'

#### HappyPack
HappyPack 可以将loader的同步执行转换为并行的

module: {
    rules: [
        {
            test: /\.js%/,
            exclude: /node_modules/,
            use: 'happypack/loader?id=jsbabel'
        }
    ]
}
plugins: [
    new HappyPack({
        id: 'jsbabel',
        loaders: ['babel-loader?cacheDirectory'],
        threads: 4
    })
]

JS压缩
```javascript
prodConfig.optimization.minimizer = [
        new UglifyJsPlugin({
            test: /\.js$/,
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: {
                    drop_debugger: true,
                    drop_console: true,
                    unused: false
                }
            }
        })
    ];
```
#### entry/output
```javascript
const path = require('path')

console.log('__dirname: ', __dirname)
console.log('path.resolve: ', path.resolve(__dirname, 'dist'))

module.exports = {
  entry: {
    app: './app.js' // 需要打包的文件入口
  },
  output: {
    publicPath: __dirname + '/dist/', // js 引用的路径或者 CDN 地址
    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
    filename: 'bundle.js' // 打包后生产的 js 文件
  }
}
```
#### babel7
使用 @babel/plugin-transform-runtime 的原因：Babel 使用非常小的助手来完成常见功能。默认情况下，这将添加到需要它的每个文件中。这种重复有时是不必要的，尤其是当你的应用程序分布在多个文件上的时候。
transform-runtime 可以重复使用 Babel 注入的程序代码来节省代码，减小体积。
```javascript
{
 "presets": [
   [
     "@babel/preset-env",
     {
       "useBuiltIns": "usage",
       "corejs": 3
     }
   ]
 ],
 "plugins": ["@babel/plugin-transform-runtime"]
}
```




