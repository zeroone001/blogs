/*
    map, filter, reduce 各自作用？
*/
/*
    map 是生成一个新的数组，遍历原来的数组，把每个元素做一个处理，
    然后放入新的数组中

*/
[1,2,4].map((value, key, arr) => {return value + 1})
/*
    filter 生成一个新的数组，遍历数组，
    然后将返回值为true的元素放到新数组里面
    可以用来删除一些不需要的元素
    回掉函数接受的参数，跟map一样
*/
[1, 2,4,5].filter((item) => {
    return item !== 5;
});
/*
    
*/




