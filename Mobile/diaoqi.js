<style>
        body {
            font-family: PingFang-SC-Regular;
        }
        body #app {
            padding: 20px;
            min-height: 600px;
            box-sizing: border-box;
        }
        #app > .title {
            margin-bottom: 0;
        }
        #app > .dec {
            color: #E62828;
            font-size: 13px;
            height: 53px;
            line-height: 53px;
            width: 100%;
            background: #FFEDED;
            border-radius: 5px;
            margin-bottom: 35px;
            padding-left: 15px;
        }
        #app > .headline > span {
            color: #E62828;
        }
        #app > .headline {
            line-height: 1;
            margin-bottom: 10px;
            font-size: 14px;
            font-weight: normal;
        }
        #app > .text-content {
            margin-bottom: 30px;
        }
        #app .text-content .el-input input {
            height: 44px;
            line-height: 20px;
            font-size: 14px;
            color: #333;
            padding: 12px 0 12px 10px;
            caret-color: auto;
        }
        #app .text-content .many-text > textarea {
            padding: 10px 10px 0;
            font-size: 14px;
            line-height: 24px;
            color: #333;
            caret-color: auto;
        }
        div.btn-box {
            height: 70px;
            width: 100%;
            position: fixed;
            left: 0;
            bottom: 0;
            padding: 12.5px 20px;
            box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.08);
            background: #fff;
        }
        div.btn-box > .submit-btn {
            font-size: 16px;
            height: 45px;
            border-radius: 45px;
            background-image: linear-gradient(180deg, #FF5A3C 0%, #E62828 100%);
        }
        #app div.btn-absolute {
            display: none;
        }
        .dialog-width .el-dialog {
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
    </style>

        $(function () {
            var ua = navigator.userAgent;
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
            var time = null;
            time = setInterval(function () {
                if ($('.el-input__inner').length) {
                    clearInterval(time);
                    handleEvent();
                }
            }, 1000);
            var isFocus = false;
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
        });
