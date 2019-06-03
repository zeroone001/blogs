// 数据结构和算法必知必会的50个代码实现
/*
    迭代器方法
    迭代函数通过对数组中的元素逐个应用，来操作返回相应的值。
    不返回新数组的 forEach() 、every()、some()、reduce()

*/
// 用 forEach 开方
function square(num) {
    console.log(num,num*num);
}
var num = [1,2,3,4,5];
num.forEach(square);
console.log(num);
/*  1 1
    2 4
    3 9
    4 16
    5 25
*/
/*
every() 返回值为布尔类型，对于应用的所有元素，该函数返回 true，则该方法返回 true
*/
function isEven(num){
  return num % 2 == 0;
}
var num = [2,4,6,8,10];
var even = num.every(isEven);
if(even){
  console.log("所有的数字都是偶数");
}else{
  console.log("不是所有的数字都是偶数");
}
/*
some() 与 every() 的不同就是只要有一个元素使改函数返回 true ，那么该方法就返回 true
*/
function isEven(num){
  return num % 2 == 0;
}
var num = [1,2,3,4,5,6,7,8];
var someEven = num.some(isEven);
if(someEven){
  console.log("有些数字是偶数");
}else{
  console.log("没有数字是偶数");
}
/*
reduce() 有两个功能，一是可以对数组元素进行求和，二是将数组元素连接成字符串。
*/
fucntion add(num1,num2){
  return num1 + num2;
}
var num = [1,2,3,4];
var sum = num.reduce(add);
console.log(sum);    // 10

function concat(str,i) {
  return str + i;
}
var words = ["I am ","a ","coder "];
var re = words.reduce(concat);
console.log(re);     // I am a coder
/*返回新数组的 map() 和 filter()*/
function addFive(grade){
  return grade += 5;
}
var grade = [77,82,88,95,90];
var result = grade.map(addFive);
console.log(result);     // 82, 87, 93, 100, 95
/*而 filter 和 every 相似，区别在于当所有的元素使改函数为 true 时，它并不返回布尔类型，而是返回一个新数组。下面这个例子十分有趣，它随机产生10个 0 到 100 的数字作为分数，然后把大于 60 的及格分数筛选出来。
*/






