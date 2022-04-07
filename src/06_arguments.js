// 执行以下代码
// console.log 会打印什么信息
function change(arr) { // 1, 1, 1
  arr[0] = arr[2];
}
function add(a, b, c = 2) {
  c = 3; // 1, 1, 3
  change(arguments); // 获取实际被传递参数的数值。1, 1, 1
  return a + b + c; // 1, 1, 3 
}
console.log(`result = ${add(1, 1, 1)}`) // 5
// 形参出现在函数定义中，在整个函数体内都可以使用， 离开该函数则不能使用。
// 实参出现在主调函数中，进入被调函数后，实参变量也不能使用。