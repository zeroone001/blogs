/*
    二叉树 非递归 前序遍历
*/

const preOrderTraverse = function (root) {
    let node = root;
    while (node) {
        console.log(node.value);
        
        node = nextNode || null;
    }
}