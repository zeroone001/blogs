### input type=file 上传文件

* 第二次上传同样文件不能触发change
* 解决方案： 在回调函数里面，将当前的input的value值置空
* event.target.value=""
*