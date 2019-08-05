// 修改某模块URL submodule
// 修改'.gitmodules'文件中对应模块的”url“属性;
// 使用git submodule sync命令，

// babel.config.js
module.exports = function (api) {
    api.cache(api);

    const presets = [];
    const plugins = [];

    return {
        presets,
        plugins
    }
}

// 获取屏幕高度
var html = document.querySelector('html');
var clientHeight = html.getBoundingClientRect().height;

// 解决IOS收起键盘的时候会留下大片的空白
function blur () {
    window.scroll(0, 0);
}

// 自定义输入框光标的颜色
caret-color: auto;

// https://blog.csdn.net/qq_42354773/article/details/87975287
var oHeight = $(document).height();
$(window).resize(function () {
    if ($(document).height() < oHeight) {
        $('.btn-box').addClass('btn-absolute');
        //当软键盘弹出，在这里面操作
    } else {
        //当软键盘收起，在此处操作
        $('.btn-box').removeClass('btn-absolute');
    }
});



