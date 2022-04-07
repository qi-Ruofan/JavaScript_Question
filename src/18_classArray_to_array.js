// 考察JS类数组转换数组
// 执行以下代码， 会输出什么结果
var obj = {
  '-1': 'a',
  '0': 'b',
  '1': 'c',
  '2': 'd',
  length: 2,
};
var arr = Array.from(obj);
console.log(`arr[0] = ${arr[0]}`)
console.log(`arr[1] = ${arr[1]}`)
console.log(`arr[2] = ${arr[2]}`)
console.log(`arr[3] = ${arr[3]}`)
// 类数组 obj的length 为2，通过Array.from() 转化成数组，会根据length截取长度
// 类数组转成数组，key如果转换成大于等于0的int数，该属性就会变成数组的索引