// JS笔试-模拟实现new操作
function A(name) {
  this.name = name;
  this.say = function() {
    console.log(`Hello! My name is ${this.name}`)
  }
}

function newObj(Constructor, params) {
  // TODO
}

const a = newObj(A, 'Mick');
a.say();

/*
	new都干了什么：
		1. 创建一个空对象，将它的引用赋给 this，继承函数的原型。这一步是隐性的
		2. 通过 this 将属性和方法添加至这个对象
		3. 最后返回 this 指向的新对象，也就是实例（如果没有手动返回其他的对象）也是隐性的
*/
// new：
// 1. 创建一个空对象：var obj = new Object()
// 2. 设置原型链：obj.__proto__ = A.prototype
// 3. 让A中的this指向obj var result = Func.call(obj)
// 4. 判断A的返回类型，如果是基本值类型改为引用类型，如果是引用类型就用引用类型
// ------------------ 解答 ------------------
function newObj() {
  const Constructor = Array.prototype.shift.call(arguments);
  const obj = {};
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  return obj;
}
function A(name) {
  this.name = name;
  this.say = function() {
    console.log(`Hello! My name is ${this.name}`)
  }
}
const a = newObj(A, 'Mick');
a.say();