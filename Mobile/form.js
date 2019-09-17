// 原生form表单自动提交及阻止方法
// form表单中只有一个type=text的input（可以有其他类型的表单），在input中按enter键，会自动提交
// form表单中有多个type=text的input，且无type=submit的按钮元素，则在input中按enter键，不会自动提交
// form表单中有type=submit的按钮元素，点击按钮元素或者在input中按enter键，会自动提交
// form表单中有type=button的按钮元素且有多个input元素，点击按钮元素或者在input中按enter键，不会自动提交
https://juejin.im/post/5b3daacaf265da0f6825ab6f


<form onsubmit="return false">
    <input type="text" />
    <input type="submit">submit
</form>

var form = document.getElementByTagName('form')[0];
form.addEventListener('submit', function (e) {
    // body...
    e.preventDefault();
});




