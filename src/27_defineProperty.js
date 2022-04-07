// JS的defineProperty属性定义考察
// 执行以下代码， 会输出什么结果
var obj = { a: 123 };
Object.defineProperty(obj, 'b', { value: 456 });
obj.c = 789;

console.log(obj);
for (let key in obj) {
  console.log(`${key}=${obj[key]}`)
}

// Object.defineProperty()的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
obj 需要定义属性的当前对象
prop 当前需要定义的属性名
desc 属性描述符

// Object.definePropert 不仅可以赋值，还可以修饰属性的一些功能，比如configurable、enumerable、value、writable、get、set