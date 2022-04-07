// 考察JS数组的filter的使用
// 执行以下代码， 会输出什么结果
var arr = [0, 1];
arr[4] = 5;
arr[5] = 6;
var arr2 = arr.filter((i) => {
  return i;
})
console.log(arr.length); // 6 [0,1,u,u,5,6]
console.log(arr2.length); // 3 [1,5,6]
// 会输出 6和3
// filter 会遍历数组内容，并且在回调参数传入遍历数组的元素 
// filter 回调函数的返回值为会创建新数组
// 数组中被删除的或者从未被赋值的索引不会被调用