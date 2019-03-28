var a = 10;
(function () {
    console.log('a', a);
    a = 5;
    console.log('aa', a);
    console.log('aaa', window.a); // 10
    var a = 15;
    console.log('aaaa', a);
})();

/*
    考查点： 变量提升
*/
