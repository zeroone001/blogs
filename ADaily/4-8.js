/*
    第 49 题：为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？
    https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/87
*/
/*
    作用：工作中，用于前端监控，比如曝光等等，谷歌和百度的都是用的1x1 像素的透明 gif 图片；
    why?

    没有跨域问题，一般这种上报数据，代码要写通用的；（排除ajax）
    不会阻塞页面加载，影响用户的体验，只要new Image对象就好了；（排除JS/CSS文件资源方式上报）
    在所有图片中，体积最小；（比较PNG/JPG）
*/
