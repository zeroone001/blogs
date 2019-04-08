/*
    使用迭代的方式实现 flatten 函数
*/
function wrap() {
    let ret = [];
    let b = [1,2,3,[4,5],[6,[7,[8]]]];
    function flat(a) {
        // body...
        for (var item of a) {
            if (item.constructor === Array) {
                ret.concat(flat(item))
            } else {
                ret.push(item)
            }
        }
    }
    flat(b);
    return ret;
}
wrap()

/*
    方法二：
*/
[1,2,3,[4,5],[6,[7,[8]]]].toString().split(',').map(Number);
[1,2,3,[4,5],[6,[7,[8]]]].join(',').split(',').map(Number);






