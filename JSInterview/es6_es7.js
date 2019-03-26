/*
    声明：let/const
    解构赋值：
    异步解决方案：
        Promise的实现和使用
        Generator
        await/async


    class/extend: 类的声明与继承
    Set/Map: 新的数据结构


*/

async function getUser(argument) {
    let user = await getFetch();
    // body...
    return user;
}
let user = await getUser();
console.log('user', user);

/*
    
*/



