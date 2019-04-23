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



