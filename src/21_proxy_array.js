// 考察JS的Proxy对数组的使用
// 执行以下代码， 会输出什么结果
var arr = new Proxy([], {
  get: function(obj, prop) {
    return obj[prop] += 1;
  },
  set: function(obj, prop, value) {
    obj[prop] = value + 1
    return true;
  },
});
arr[0] = 0;
console.log(`arr.length = ${arr.length}`) 
console.log(`arr.length = ${arr.length}`)
console.log(`arr.length = ${arr.length}`)
arr[1] = 1;
console.log(`arr.length = ${arr.length}`)