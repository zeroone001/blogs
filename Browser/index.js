/*
    https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-38
    1, 跨标签页通信
    通过父页面window.open()和子页面postMessage

    异步下，通过 window.open('about: blank') 和 tab.location.href = '*'

    设置同域下共享的localStorage与监听window.onstorage

    重复写入相同的值无法触发
    会受到浏览器隐身模式等的限制

    设置共享cookie与不断轮询脏检查(setInterval)
    借助服务端或者中间层实现


*/
/*
    从输入 url 到展示的过程

DNS 解析
TCP 三次握手
发送请求，分析 url，设置请求报文(头，主体)
服务器返回请求的文件 (html)
浏览器渲染

HTML parser --> DOM Tree

标记化算法，进行元素状态的标记
dom 树构建


CSS parser --> Style Tree

解析 css 代码，生成样式树


attachment --> Render Tree

结合 dom树 与 style树，生成渲染树


layout: 布局
GPU painting: 像素绘制页面

*/