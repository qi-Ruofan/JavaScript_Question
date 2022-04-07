// JS的类数组考察
// 执行以下代码， 会输出什么结果
var arr = {
  '1': 'a',
  '2': 'b',
  length: 2,
  push: Array.prototype.push
}
arr.push('c');
arr.push('d');
console.log(`arr[0] = ${arr[0]}`) // undefined
console.log(`arr[1] = ${arr[1]}`) // a
console.log(`arr[2] = ${arr[2]}`) // c
console.log(`arr[3] = ${arr[3]}`) // d

// 当类数组length是数字时，代表插入数据的位置