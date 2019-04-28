#### code Splitting
```javascript
optimization: {
    splitChunks: {
        chunks: 'all',
        minChunks: 1, // 最小公用次数
        cacheGroups: {
            lodash: {
                name: 'lodash',
                test: /[\\/]node_modules[\\/]lodash[\\/]/,
                priority: 5
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10 // 优先级
            }
        }
    }
}
```

####自动生成 HTML 文件
自动生成 HTML 文件，并自动引入打包后的 js 文件






