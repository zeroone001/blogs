/*
    堆排序
    把数组当作二叉树来排序
    堆是一个完全二叉树。
    完全二叉树： 二叉树除开最后一层，其他层结点数都达到最大，最后一层的所有结点都集中在左边（左边结点排列满的情况下，右边才能缺失结点）。
    大顶堆：根结点为最大值，每个结点的值大于或等于其孩子结点的值。
    小顶堆：根结点为最小值，每个结点的值小于或等于其孩子结点的值。
    堆的存储： 堆由数组来实现，相当于对二叉树做层序遍历
    2i+1和2i+2
*/
// // 交换两个节点
// function swap(A, i, j) {
//   let temp = A[i];
//   A[i] = A[j];
//   A[j] = temp; 
// }

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设 结点 i 以下的子堆已经是一个大顶堆，shiftDown函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。后面
// 将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 shiftDown操作，所以就满足了结点 i 以下的子堆已经是一大
//顶堆
function shiftDown(A, i, length) {
  let temp = A[i]; // 当前父节点
// j<length 的目的是对结点 i 以下的结点全部做顺序调整
  for(let j = 2*i+1; j<length; j = 2*j+1) {
    temp = A[i];  // 将 A[i] 取出，整个过程相当于找到 A[i] 应处于的位置
    if(j+1 < length && A[j] < A[j+1]) { 
      j++;   // 找到两个孩子中较大的一个，再与父节点比较
    }
    if(temp < A[j]) {
      // swap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
      [A[i], A[j]] = [A[j], A[i]];
      i = j;  // 交换后，temp 的下标变为 j
    } else {
      break;
    }
  }
}

// 堆排序
function heapSort(A) {
  // 初始化大顶堆，从第一个非叶子结点开始
  for(let i = Math.floor(A.length/2-1); i>=0; i--) {
    shiftDown(A, i, A.length);
  }
  // 排序，每一次for循环找出一个当前最大值，数组长度减一
  for(let i = Math.floor(A.length-1); i>0; i--) {
    // swap(A, 0, i); // 根节点与最后一个节点交换
    [A[0], A[i]] = [A[i], A[0]];
    shiftDown(A, 0, i); // 从根节点开始调整，并且最后一个结点已经为当
                         // 前最大值，不需要再参与比较，所以第三个参数
                         // 为 i，即比较到最后一个结点前一个即可
  }
}

let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
// heapSort(Arr);
console.log(Arr);
let buildHeap = (arr) => {
    let size = arr.length;
    
}
let heapSort2 = (arr) => {
    const len = arr.length;
    buildHeap(arr);
}


