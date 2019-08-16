// 下面两个函数可以用来获取绝对位置的横坐标和纵坐标。
// http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html
　function getElementLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;

　　　　while (current !== null) {
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}

　　　　return actualLeft;
　　}

　　function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}

　　　　return actualTop;
　　}

// 第二种简单方法

var x = this.getBoundingClientRect().top + document.documentElement.scrollTop;


