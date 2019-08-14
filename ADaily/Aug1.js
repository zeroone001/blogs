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

function handleEvent () {
    console.log('handleEvent');
    $('.el-input__inner').each(function(index, item) {
        if (index === 0) {
            $(item).attr('placeholder', '请输入品牌的中文/英文名称');
        } else if (index === 1) {
            $(item).attr('placeholder', '参考源/官网/电商链接');
        }
        if (!isAndroid) {
            $(item).focus(function() {
                isFocus = true;
                $('.btn-box').addClass('btn-absolute');
            }).blur(function() {
                isFocus = false;
                setTimeout(function(){
                    if (!isFocus) {
                        window.scroll(0, 0);
                    }
                }, 500);
                $('.btn-box').removeClass('btn-absolute');
            });
        }
    });
    $('.el-textarea__inner').attr('placeholder', '可填写品牌的定位，主营产品，使用感受等，最多200字哦~');
    if (!isAndroid) {
        $('.el-textarea__inner').focus(function() {
            isFocus = true;
            $('.btn-box').addClass('btn-absolute');
        }).blur(function() {
            isFocus = false;
            setTimeout(function(){
                if (!isFocus) {
                    window.scroll(0, 0);
                }
            }, 500);
            $('.btn-box').removeClass('btn-absolute');
        });
    }
    if (isAndroid) {
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
    }
}

// html img图片上方产生1像素px间隙解决
// 通过CSS对图片加一个浮动属性，比如.divcss5 img{ float:left }

// different text colour for part of string in text input
<div id="input" contenteditable="true"><span>This is </span> quite cool!</div>
#input{
  font-family:Arial, Helvetica, sans-serif;
  border:1px solid #ccc;
  background:#eee;
  height:20px;
  width:200px;
  padding:7px;
  color:#888;
}
#input span{
  color:#444;
  font-weight:bold;
}

