/*
    JQ用原生JS来写
*/
/*
    CSS & Style
*/
$el.addClass(className);
el.classList.add(className);

$el.removeClass(className);
el.classList.remove(className);

$el.hasClass(className);
el.classList.contains(className);

/*
    Width & Height
*/
$(window).height();
// 不含 scrollbar，与 jQuery 行为一致
window.innerHeight;
// 含 scrollbar
document.documentElement.clientHeight;

$(document).height();

const body = document.body;
const html = document.documentElement;
const height = Math.max(
    body.offsetHeight,
    body.scrollHeight,
    html.offsetHeight,
    html.scrollHeight
    );

/*
    获取匹配元素相对于父元素的偏移
*/
$el.position();
// native
el.offsetLeft
el.offsetTop;
// 获取匹配元素相对于文档的偏移
$el.offset();
// native
function getOffset(el) {
    // body...
    const box = el.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
    }
}
// 获取元素滚动条垂直位置
$(window).scrollTop();
const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
/*
    DOM 操作
*/
// Remove
$el.remove();
el.parentNode.removeChild(el);
// Text












