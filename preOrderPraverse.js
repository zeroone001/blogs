/*
    二叉树 非递归 前序遍历, 主要是利用了栈
*/
const root = {
  value: 'A',
  left: {
      value: 'B',
      left: {
          value: 'D',
          left: {
              value: 'H',
              left: null,
              right: {
                  value: 'K',
                  left: null,
                  right: null
              }
          },
          right: null
      },
      right: {
          value: 'E',
          left: null,
          right: null
      }
  },
  right: {
      value: 'C',
      left: {
          value: 'F',
          left: {
              value: 'I',
              left: null,
              right: null
          },
          right: null
      },
      right: {
          value: 'G',
          left: null,
          right: {
              value: 'J',
              left: null,
              right: null
          }
      }
  }
}
/*const preOrderTraverse = function (root) {
    let node = root;
    let stack = [];
    while (node || stack.lenght !== 0) {
        console.log(node.value);
        let nextNode;
        if (node.left) {
            nextNode = node.left;
            if (node.right) {stack.push(node.right);}
        } else if (!node.left && node.right) {
            nextNode = node.right;
        } else {
            nextNode = stack.pop();
        }

        node = nextNode || null;
    }
}*/
// 简化版本
const preOrderTraverse = function (root) {
    // body...
    let node = root,
        stack = [];
    while (node || stack.length !== 0) {
        if (node) {
            console.log(node.value);
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            node = node.right ? node.right : null; 
        }
    }
}

console.log(preOrderTraverse(root));