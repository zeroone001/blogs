>回调地狱的问题：

1. 嵌套函数存在耦合性，一旦改动，牵一发动全身；
2. 很难处理错误
3. 不能用try catch 捕获错误
4. 不能return

>Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？

Promise 翻译过来就是承诺的意思，这个承诺会在未来有一个确切的答复，并且该承诺有三种状态，分别是：

1. 等待中（pending）
2. 完成了 （resolved）
3. 拒绝了（rejected）
这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为resolved 后，就不能再次改变.
```javascript
new Promise((resolve, reject) => {
  resolve('success')
  // 无效
  reject('reject')
})
```
当我们在构造 Promise 的时候，构造函数内部的代码是立即执行的

```javascript
new Promise((resolve, reject) => {
  console.log('new Promise')
  resolve('success')
})
console.log('finifsh')
// new Promise -> finifsh
```
每次调用then之后返回的都是Promise, 并且是一个全新的








