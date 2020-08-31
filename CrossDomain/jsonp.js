/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-03-20 15:02:30
*/
/*
    跨域问题
    ajax 跨域报错原因：
    1， 浏览器的限制， 不是后端服务器的问题
    2， 跨域
    3， XHR （用jsonp（<script>）,或者<img>都可以解决）
*/
/*
    浏览器限制的解决方案： 控制台：  open -n /Applications/Google\ Chrome.app/ —args —disable-web-security  —user-data-dir=/Users/xxxx/MyChromeDevUserData/

*/
/*
1， JSONP 如何解决跨域
2，JSONP的实现原理
Type: script
返回类型： JS脚本
弊端： 
1，服务器需要改动代码支持
2，只支持GET
3，
*/
/*
    简单请求&非简单请求
    OPTIONS预检命令
*/
/*
    Access-control-allow-origin: '*'
    服务器解决跨域
*/
/*
    带cookie的跨域
    允许携带cookie
    带cookie的时候，origin必须是全匹配，不能是*
    Filter解决，判断request里面的origin，然后设置就好了
*/
$.ajax({
    xhrFields: {
        withCredentials: true
    }
});
/*
nginx
启动
start nginx
nginx -s reload
nginx -s stop
*/









