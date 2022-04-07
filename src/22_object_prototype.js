// JS的Object.getPrototypeOf原型使用考察
// 执行以下代码， 会输出什么结果
function A() {};

var a0 = new A();

a0.__proto__ = A.prototype

var a1= {};
a1.__proto__ = A.prototype;

var a2 = {};
a2.__proto__ = Object.getPrototypeOf(new A()); // 是指向 new A() 对象的原型.

var a3 = {};
a3.__proto__ = Object.getPrototypeOf(A); // 是指向 A函数的原型. Function.prototype

console.log(a0 instanceof A); // true
console.log(a1 instanceof A); // true
console.log(a2 instanceof A); // true
console.log(a3 instanceof A); // false