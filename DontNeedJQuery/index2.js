// clone 深拷贝被选元素
$el.clone()
el.cloneNode;
// empty 清楚所有子节点
$el.empty();
el.innerHtml = '';

// 把每个被选元素放置在指定的HTML结构中。
//Native
Array.prototype.forEach.call(document.querySelector('.inner'), (el) => {
   const wrapper = document.createElement('div');
   wrapper.className = 'wrapper';
   el.parentNode.insertBefore(wrapper, el);
   el.parentNode.removeChild(el);
   wrapper.appendChild(el);
});

// Events
if (document.readyState !== 'loading') {
    eventhandler();
} else {
    document.addEventListener('DOMContentLoaded', eventhandler);
}
