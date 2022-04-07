// JS的delete使用考察
// 执行以下代码， 会输出什么结果
var a1 = {
  num: 123
}
var b1 = Object.create(a1);
delete b1.num;
console.log(`b1.num = ${b1.num}`); // 123 delete 只能删window属性 不能删除 一个对象从原型继承而来的属性 b1 并没有自己的num属性


var a2 = {
  num: 456
}
var b2 = Object.create(a2);
delete a2.num;
console.log(`b2.num = ${b2.num}`) // undefined

// 引申：为什么var声明的变量不能被delete
// 1. 每个变量下都有一个隐藏属性，configurable,这个属性确定了变量名字能否更改，变量能否被删除。true的话，可以更改，可删除；反之，不能更改，不能删除。
// 2. 在用var 声明变量时，JS解析器会默认把configurable设为false，所以它不能改名字，不能被删掉。