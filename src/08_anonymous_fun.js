// 执行以下代码， 会有什么结果
var a = function b(){
  return 123;
};
console.log(" type = ", typeof b); 
// 会抛出异常，type = undefined
// 匿名函数表达式函数只能在函数体内有效，例如
var a = function b(){
  console.log(" type = ", typeof b); 
  return 123
};