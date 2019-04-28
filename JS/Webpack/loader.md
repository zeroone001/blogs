#### 处理 CSS/SCSS 文件
css-loader:负责解析 CSS 代码，主要是为了处理 CSS 中的依赖，例如 @import 和 url() 等引用外部文件的声明

```javascript
use: [
    'css-hot-loader',
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')({
                    'browsers': ['> 1%', 'last 10 versions']
                })
            ]
        }
    },
    'sass-loader'
]
```