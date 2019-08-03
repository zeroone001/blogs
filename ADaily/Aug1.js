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