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



