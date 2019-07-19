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
/*
  Vertical scrolling in iOS not smooth ?
  overflow: scroll 在IOS上不流畅
*/
* {
  -webkit-overflow-scrolling: touch;
}

/**/
getMonthWeek: function (a, b, c) {
      /*
      a = d = 当前日期
      b = 6 - w = 当前周的还有几天过完（不算今天）
      a + b 的和在除以7 就是当天是当前月份的第几周
      */
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() - 1;
      let w = date.getDay();
      let d = date.getDate();

      m = m < 10 ? '0' + m : m;
      return y + '.' + m + '第' + (Math.ceil(
          (d + 6 - w) / 7) + '周'
      );
 }
// vue 中使用 async/await 将 axios 异步请求同步化处理
// 场景：a标签跳转
async beforeApply (e) {
    console.log('e', e);
    if (!this.isClickApply) {
        this.isClickApply = true;
    } else {
        let params = {
            publish_time: this.publish_time
        };
        var response = await axios.get(domainUrl + 'jsonp_weekly_detail', params);
        console.log('response', response);
        if (response.error_code === 0) {
            let data = response.data;
            if (data.bl_master_audit_status === 0 || data.bl_master_audit_status === 1 || data.bl_master_audit_status === 2) {
                e.preventDefault();
                this.alertBoxShow('正在审核中');
                this.baoliaoData.bl_master_audit_status = data.bl_master_audit_status;
            }
        }
    }
},
// event.preventDefault()不起作用的坑
// 如果event.preventDefault()前面有异步调用就不起作用了
// e.stopPropagation();
// e.stopImmediatePropagation();

// 客户端给接口缓存的bug
// 在客户端里面，我们用axios发送的第二次等多次请求，会有缓存，
// 客户端会把数据缓存，之后，服务器接收不到，解决方案，在接口链接上加时间戳



















