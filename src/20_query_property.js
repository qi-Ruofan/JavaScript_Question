/ 考察JS对象和数组属性的查询
// 执行以下代码， 会输出什么结果
var arr = ['a', 'b', 'c', 'd'];
var obj = { a: 1, b: 2, c: 3, d: 4 };

var arrProperties = Object.getOwnPropertyNames(arr);
var objProperties = Object.getOwnPropertyNames(obj);

console.log(arrProperties.length === objProperties.length) // false
// Object.getOwnPropertyNames 可以获取对象的属性和原生内置属性
// 数组对象是有length原生内置属性
// Object.getOwnPropertyNames(arr) = ["0", "1", "2", "3", "length"]
// Object.getOwnPropertyNames(obj) = ["a", "b", "c", "d"]