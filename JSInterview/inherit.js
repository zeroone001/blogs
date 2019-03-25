/*
    继承
    在JS中继承，基本上指的是原型链继承
    

*/
var inherit = (function(c, p){
    var F = function(){};
        return function(c,p){
            F.prototype = p.prototype;
            c.prototype = new F();
            c.uber = p.prototype;
            c.prototype.constructor = c;
        }
    })();
/*
    ES6语法糖 class extend
*/

/*
    类型判断
    1, 基本类型： null : String(null) === 'null'
    2, 基本类型： typeof : string ,number, boolean, undefined, function
    3, 引用类型： Array Date RegExp : Object.prototype.toString.call(a) === '[object xx]'
*/
var a = function(){}; typeof a === 'function'

let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase()) 

function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}









