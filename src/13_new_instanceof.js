// 执行以下代码， 会有什么结果
function A() {
  return A;
}
var a = new A();
// new：
// 1. 创建一个空对象：var obj = new Object()
// 2. 设置原型链：obj.__proto__ = A.prototype
// 3. 让A中的this指向obj var result = Func.call(obj)
// 4. 判断A的返回类型，如果是基本值类型改为引用类型，如果是引用类型就用引用类型

console.log(a instanceof A)
// a.__proto__ == A.prototype



function B() {
  return {};
}
var b = new B();
console.log(b instanceof B)
// b.__proto__ == B.prototype

function C() {}
var c = new C();
console.log(c instanceof C)
// c.__proto__ == C.prototype

// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// 语法：object instanceof constructor   检测：object.__proto__ == constructor.prototype

// prototype和__proto__
/*
	prototype是函数才有的属性
	__proto__是每个对象都有的属性
	__proto__===constructor.prototype
	通过 Object.create()创建的对象有可能不是， Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
	obj.__proto__===obj.constructor.prototype
*/