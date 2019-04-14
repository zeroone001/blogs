// js 判断滚动条是否到达底部

//滚动条在Y轴上的滚动距离
function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}
//文档的总高度
function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}
//给Window设置滚动事件
window.onscroll = function(){
　　if(getScrollTop() + getWindowHeight() == getScrollHeight()){
　　　　alert("you are in the bottom!");
　　}
};
/*
使页面滚动条自动滚到底部
*/

/*
使页面滚动条自动滚到底部 
第一种方法 
<body onload="document.body.scrollTop = document.body.scrollHeight"> 

第二种方法:使用javascript的scrollTonto View方法 

<body onload=slt1()> 
<script> 
function slt1() 
{ 
document.getElementById("end").scrollIntoView(); 
} 
</script> 

往页面的底部加一个锚点: 
<a name="end" ></a>
*/