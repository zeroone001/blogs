/*
    js判断单击软键盘的“完成”按钮
*/
https://www.jianshu.com/p/e5d33721595d

代码

html
<form action="" id="form"> <input type="text"> </form>

js
$('#form').submit(function(){ // 处理相关逻辑 return false; })

html
<input type="text" id ="txt">

js
$("#txt").keypress(function(e){ if(e.keyCode === 13) { // 处理相关逻辑 } })
