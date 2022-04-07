// 考察JS的Set使用
// 执行以下代码， 会输出什么结果
var arr1 = [0, 1, 1, 2, 3, 3];
var set = new Set(arr1);
var arr2 = Array.from(set);

console.log(set); // {0,1,2,3}
console.log(arr2); // [0,1,2,3]
// new Set() 如果传入一个数组，会对数组里的元素进行去重
// set 是一个Set对象，是arr去重后的内容，为 {0, 1, 2, 3}
// Array.from(set)将类数组Set对象{0, 1, 2, 3} 转成数组
// arr2 = [0, 1, 2, 3]