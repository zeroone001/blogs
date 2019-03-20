/*
    跨域问题
    ajax 跨域报错原因：
    1， 浏览器的限制， 不是后端服务器的问题
    2， 跨域
    3， XHR （用jsonp（<script>）,或者<img>都可以解决）
*/
/*
    浏览器限制的解决方案： 控制台：  open -n /Applications/Google\ Chrome.app/ —args —disable-web-security  —user-data-dir=/Users/smzdm/MyChromeDevUserData/

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