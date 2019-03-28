/*
    S获取URL中参数值（QueryString）的4种方法分享
*/
function getQueryString(name) {
var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
var r = window.location.search.substr(1).match(reg);
if (r != null) {
return unescape(r[2]);
}
return null;
}
