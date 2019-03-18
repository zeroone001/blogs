/*
    map()
    reduce()
    这是Google大名鼎鼎的论文， https://research.google.com/archive/mapreduce-osdi04-slides/index.html

*/
// map不会对原数组做出改变，返回一个新的数组
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function pow(x) {
    return x * x;
}
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

// reduce 这个函数必须接受两个参数
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579 

function string2int(s) {
    // body...
    return Array.prototype.map.call(s, (x) => {
        return +x;
    }).reduce((x, y) => {
        return x*10 + y;
    }); 
}
string2int('12431214');
// 请把用户输入的不规范的英文名字，变为首字母大写，
// 其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。

function normalize(arr) {
    // body...
    return arr.map((x) => {
        return Array.prototype.map.call(x, (y, i) => {0
            if (i === 0) {
                y = y.toUpperCase();
            } else {
                y = y.toLowerCase();
            }
            return y;
        }).reduce((m, n) => {
            return m + n
        });
    });
}

if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}
