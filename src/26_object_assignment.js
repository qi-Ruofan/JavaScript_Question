// JS的对象属性赋值操作考察
// 执行以下代码， 会输出什么结果
var obj = { a: 1 }
obj.b = obj = {
  a: 2
}
console.log(typeof obj.b); // undefined

// 会输出
// undefined
// 1. "." 符号优先级会高于 "=" 的优先级
// 2. 先执行 obj.b 创建一个属性"b"，值为 undefined
// 3. obj 指向改变了，指向了 { a: 2 }
// 4. obj.b 被赋值成 { a: 2 }
// 5. 由于 obj 指向改变，不再指向原有对象，所以 obj.b 为undefind