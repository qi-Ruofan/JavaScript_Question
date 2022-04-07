// 考察JS对象循环引用
// 执行以下代码， 会输出什么结果
var obj1 = {
  a: 123
}
var obj2 = {
  b: 456
}
obj1.c = obj2;
obj2.c = obj1;
const jsonstr = JSON.stringify(obj1);
// JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
console.log(jsonstr)

// 会在 JSON.stringify 时候报错
// JSON.stringify 和 JSON.parse 无法序列化的循环引用的JSON对象