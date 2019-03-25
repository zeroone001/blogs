var count = 3;
function addCount () {
    count++;
}
// module.exports = {
//     count: count,
//     addCount: addCount
// };


module.exports = {
    // count: function () {
    //     return count;
    // },
    // 取值器函数
    get count() {
        return count;
    },
    addCount: addCount
}