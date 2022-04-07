// 执行以下代码， 会输出什么结果
function* generator(a) {
  let length = a.length;
  for (let i = 0; i < length; i++) {
    let item = a[i];
    if (typeof item !== 'number') {
      yield* generator(item);
    } else {
      yield item;
    }
  }
}
const tasks = generator([[[4], 5, 6], [1], 0]);
let result;
while (result = tasks.next(), result.done !== true) {
  console.log(result.value)
}
/*
4
5
6
1
0
*/
/*
	生成器：使用 function* 语法和一个或多个 yield 表达式以创建一个函数即为生成器
	返回值：一个迭代器即生成器
	区别于普通函数所以要在函数名加*
	整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield 语句注明。

	调用 Generator 函数，会返回一个内部指针（即遍历器 ）g 。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止，再次调用g的next的方法，内部指针指向下个yield语句。

	每次调用 next 方法，会返回一个对象，这个对象就是具有两个属性（done (done=false) 和 value (value=operand)）的 IteratorResult 对象。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。

	yield* 委托到 另一生成器。

*/