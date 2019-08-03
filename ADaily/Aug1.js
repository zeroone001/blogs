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



