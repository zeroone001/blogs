/*
    二叉树的非递归遍历
    栈
    二叉树的非递归中序遍历
*/
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    while(root||stack.length !== 0)
     {
          while(root)
          {
              stack.push(root);
             root=root.left;
         }
         if(stack.length)
         {
             let p=stack[stack.length - 1];
             res.push(p.val);
             stack.pop();
             root = p.right;
         }
     }  
    return res;
};


