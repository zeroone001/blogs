/* 二叉查找树 */

function vNode (value) {
    this.val = value;
    this.left = this.right = null;
}

function createBST (arr) {
    var len = arr.length;
    if (len < 1) {
        return 'no_val';
    }
    var l = 0;
    var r = len - 1;
    var temp = arr[0];
    while (l < r) {
        while (l < r && arr[r] >= temp)
            r--;
        while (l < r && arr[l] <= temp) 
            l++
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    [arr[0], arr[l]] = [arr[l], arr[0]];
    var root = new vNode(arr[l]);
    root.left = createBST(arr.slice(0, l));
    root.right = createBST(arr.slice(l + 1));
    return root;
}
var arr = [5, 1, 7, 2, 4, 6, 9];
console.log(createBST(arr));
