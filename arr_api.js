/*
    数组不low的一些操作
*/

/*
    去重
*/
// 终极
[...new Set([1,2,2,3,4,5,4])]
Array.from(new Set([1,1,3]))
// 开始
Array.prototype.distinct = function () {
    // body...
    var arr = this;
    var i, j, len = arr.length, result = [];
    for (i = 0, i < len; i++ ) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    } 
    return result;
}
[1,2,3,3,4,4].distinct(); //[1,2,3,4]

/*
    排序
*/
[3,1,2].sort();
[3,2,1,4].sort((a, b) => {b - a});
/*
    选择排序
*/
Array.prototype.selectSort=function () {
    let arr=this,
        len = arr.length;
    for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i, len = arr.length; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
}
return arr;
}
[1,2,3,4].selectSort() //[1,2,3,4] 

/*
    最大值
*/
Math.max(...[1,2,3,4]) //4
Math.max.apply(this,[1,2,3,4]) //4
[1,2,3,4].reduce((prev, cur, curIndex, arr)=> {
 return Math.max(prev,cur);
}, 0) //4
/*
    求和
*/
[1, 2, 3, 4].reduce((prev, cur) => {     
    return prev + cur;
});
/*
    合并
*/
[1,2,3,4].concat([5,6]) //[1,2,3,4,5,6]
[...[1,2,3,4],...[4,5]] //[1,2,3,4,5,6]
[1,2,3,4].push.apply([1,2,3,4],[5,6]) //[1,2,3,4,5,6]
[5,6].map(item=>{
    [1,2,3,4].push(item)
}) //[1,2,3,4,5,6]

/*
    判断是否包含值
*/
[1,2,3].includes(4) //false
[1,2,3].indexOf(4) //-1 如果存在换回索引
[1, 2, 3].find((item)=>item===3)) //3 如果数组中无值返回undefined
[1, 2, 3].findIndex((item)=>item===3)) //2 如果数组中无值返回-1

/*
    类数组转化
*/

Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)
Array.prototype.slice.apply(arguments)
Array.from(arguments)
[...arguments]
// slice: 改变this的指向
/*
    过滤数组
*/
[1,2,3].filter(item=>{return item>2}) //[3]

/*
    对象数组转化
*/
Object.keys({});
Object.values({});
Object.entries({});
Object.fromEntries([name,'张三'],[age,14]) //ES10的api,Chrome不支持 , firebox输出{name:'张三',age:14}






