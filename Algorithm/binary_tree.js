/*
    相关概念
    「前序遍历」指先访问节点，再遍历节点的左子树，最后遍历节点的右子树，按照这种规则不重复地访问树中所有节点的过程。
「中序遍历」指先遍历节点的左子树，再访问节点，最后遍历节点的右子树，按照这种规则不重复地访问树中所有节点的过程。
「后序遍历」指先遍历节点的左子树，再遍历节点的右子树，最后访问节点，按照这种规则不重复地访问树中所有节点的过程。
*/

function Node(value) {
    // body...
    this.value = value;
    this.left = this.right = null;
}

var root = {
  value: 'A',
  left: {
      value: 'B',
      left: {
          value: 'D',
          left: {
              value: 'H',
              left: null,
              right: null
          },
          right: {
              value: 'I',
              left: null,
              right: null
          }
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
          left: null,
          right: null
      },
      right: {
          value: 'G',
          left: null,
          right: null
      }
  }
}
// 前序遍历
function preOrderTraverse (root) {
    // body...
    console.log(root.value);
    root.left && preOrderTraverse(root.left);
    root.right && preOrderTraverse(root.right);
}
// 中序遍历
function inOrderTraverse(argument) {
    // body...
    root.left && inOrderTraverse(root.left);
    console.log(root.value);
    root.right && inOrderTraverse(root.right);
}
// 后序遍历
function postOrderPraverse(argument) {
    // body...
    root.left && postOrderPraverse(root.left);
    root.right && postOrderPraverse(root.right);
    console.log(root.value);
}




