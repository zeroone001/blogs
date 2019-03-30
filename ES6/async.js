/*
    ES6 async/await
    http://www.ruanyifeng.com/blog/2015/05/async.html
*/
/*
    await 只能出现在async函数中；
*/
async function test1 () {
    return 'async.js';
}   
test1(); // 输出一个Promise对象
test1().then(v => {
    console.log(v);
});
/*
    await 如果等到的是promise对象，就会阻塞后面的代码，
    等着Promise对象的resolve， 然后得到resolve的值；
    貌似是阻塞了，这就是await必须放在async异步函数里面的原因；
    
    如果函数本身返回的就是Promise对象，加不加async都一样；
    如果多个操作继发执行，那就不要用forEach,要用for() 循环来处理

    
*/
async function dbFuc(db) {
  let docs = [{}, {}, {}];

  for (let doc of docs) {
    await db.post(doc);
  }
}
// 如果确实希望多个请求并发执行，可以使用 Promise.all 方法。
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}

// 或者使用下面的写法

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}

