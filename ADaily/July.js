// 1. vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？

/*
    参考： https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/145
*/

/*
    IOS Input Disabled默认样式问题?

    input:disabled, textarea:diabled {
        -webkit-text-fill-color: #000;
        -webkit-opacity: 1;
        color: #000;
    }

    https://www.jianshu.com/p/c4e3bc4048f8
*/

/*
    vue里mint-ui的picker弹窗的穿透效果 禁止?

    在弹出组件的时候，阻止body滑动事件；弹回的时候，开启body滑动事件

    https://blog.csdn.net/weixin_43953710/article/details/88600323
    <mt-datetime-picker ref="picker"
                        type="date"
                        :endDate="endDate"
                        :startDate="startDate"
                        v-model="pickerValue"
                        @confirm="handleConfirm"
                        @visible-change = "visbleChange">


        data () {

          handler: function(e){
                    e.preventDefault()
                },
        }

        watch: {
              value(val) {
                this.currentValue = val;
              },

              rims() {
                this.generateSlots();
              },

              visible(val) {
                this.$emit('visible-change', val);
              }
            },

        mehtods: {
           // 解决页面层级相互影响滑动的问题
           // 打开的时候和关闭的时候
              closeTouch () {
                  document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, {passive:false})//阻止默认事件
              },
              openTouch () {
                  document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, {passive:false})//打开默认事件
              },
            visbleChange (val) {
                    if(val) {
                        this.closeTouch()
                    } else {
                        this.openTouch()
                    }
                  },
        }
*/
