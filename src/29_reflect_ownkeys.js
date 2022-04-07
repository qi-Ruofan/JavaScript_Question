// 考察JS的Reflect.ownKeys
// 执行以下代码， 会输出什么结果
Object.prototype.a = '111';
var obj = {
  [Symbol('a')]: '222'
};
Object.defineProperty(obj, 'b', {
  value: '333'
});
const keys = Reflect.ownKeys(obj);
console.log(keys.length) // 2

// Object.keys()返回属性key，但不包括不可枚举的属性
// Reflect.ownKeys()返回所有属性key