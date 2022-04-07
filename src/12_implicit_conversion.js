// 执行以下代码， 会有什么结果
var a1 = [0];
if (a1) {
  console.log(a1 == true);
} else {
  console.log(a1);
}

var a2 = [1];
if (a2) {
  console.log(a2 == true);
} else {
  console.log(a2);
}
// 1. 当 a1 = [0] 在 if 的条件判断中时，会转成布尔值，而 Boolean([0])为 true
// 2. a1 == true 进行比较时，[0]被隐式调用数组的 join 方法转换成了 '0'，所以 [0].join() == true 为 false
// 3. 当 a2 = [1] 在 if 的条件判断中时，会转成布尔值，而 Boolean([1])为 true
// 4. a2 == true 进行比较时，[1]被转换成了 [1].join()，所以 [1].join() == true 为 t