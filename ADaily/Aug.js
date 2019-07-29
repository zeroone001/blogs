// 蚂蚁金服的移动端图表插件
import F2 from '@antv/f2';

function renderChart () {
    if (this.baoliaoData.weekly_type === undefined || this.baoliaoData.weekly_type === 'xinxing') return;
    var gongxianScore = 12;
    var daihuoScore = 32;
    var huoyueScore = 32;
    var hudongScore = 43;
    var chuangzaoScore = 12;

    var baoliaoScore = [{
        name: '贡献力',
        value: gongxianScore,
        img: 'icon-contribution-o-thin',
        fun: 'gongXian()',
        classed: 'gxl'
    }, {
        name: '带货力',
        value: daihuoScore,
        img: 'icon-bag-o-thin',
        fun: 'daiHuo()',
        classed: 'dhl'
    }, {
        name: '活跃',
        value: huoyueScore,
        img: 'icon-fire-o-thin',
        fun: 'huoYue()',
        classed: 'hyl'
    }, {
        name: '互动',
        value: hudongScore,
        img: 'icon-comment-o-thin',
        fun: 'huDong()',
        classed: 'hdl'
    }, {
        name: '创作力',
        value: chuangzaoScore,
        img: 'icon-edit-o-thin',
        fun: 'chuangZuo()',
        classed: 'czl'
    }];

    var chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    // 载入数据源
    chart.source(baoliaoScore, {
        value: {
            min: 0,
            max: 120,
            tickCount: 4
        }
    });

    chart.coord('polar');
    chart.tooltip(false); // 关闭 tooltip
    chart.axis('value', {
        grid: {
            lineDash: null
        },
        label: null,
        line: null
    });
    chart.axis('name', {
        grid: {
            lineDash: null,
            top: true
        },
        label: null
    });
    chart.area().position('name*value').color('#E7BF74').style({
        fillOpacity: 0.5
    }).animate({
        appear: {
            animation: 'groupWaveIn'
        }
    });
    // chart.line().position('name*value').color('#E7BF74').size(1).animate({
    //     appear: {
    //         animation: 'groupWaveIn'
    //     }
    // });

    baoliaoScore.map(function (obj, n) {
        var offsetY = obj.name === '互动' || obj.name === '活跃' ? -10 : 0;
        chart.guide().html({
            position: [obj.name, 160],
            html: `<div class="${obj.classed}" onclick="${obj.fun}" style="top:-6px;width: 50px;text-align: center"><i class="${obj.img}" style="font-size: 20px;color: #b08034;"></i><div style="color: #b08034;font-size:14px;margin-top:-3px;">${obj.name}</div></div></div>`,
            offsetY: offsetY
        });
    });

    let baoliaoScoreCenter = this.baoliaoData.baoliao_score;
    chart.guide().html({
        position: ['50%', '50%'],
        html: `<div style="color: #b08034;white-space: nowrap;text-align:center;"><p style="font-size: 35px;margin:0;width: 100px;text-align: center; font-weight: bold;font-family: 'Lato';">${baoliaoScoreCenter}</p></div>`
    });
    chart.render();
}

// 一道题 

//JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
    add(promiseCreator) {
    }
    // ...
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add( () => timeout(time) ).then( () => console.log(order) )
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4


