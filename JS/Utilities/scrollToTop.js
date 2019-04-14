/*
    原生JS实现平滑滚动到顶部
*/
function returnTop() {
    // body...
    var dd = document.documentElement || document.body;
    var top = dd.scrollTop;
    var step = Math.floor(top/20);
    console.log('step', step);
    console.log('top', top);
    function scrollTo() {
        top -= step;
        if (top > -step) {
            dd.scrollTop = top;
            setTimeout(function (){scrollTo();}, 20);
        }
    }
    scrollTo();
}
returnTop();

