// 执行以下代码， 会有什么结果
var proxyObj = new Proxy({a: 1, b: 2}, {
  get: function(obj, prop) {
    return obj[prop] + '1';
  },
  set: function(obj, prop, value) {
    obj[prop] = value - 1;
    return true;
  },
});
console.log(proxyObj.a);  // 11
console.log(proxyObj.b);  // 21
proxyObj.a = 3;
proxyObj.b = 4;
console.log(proxyObj.a); // 21
console.log(proxyObj.b); // 31

/*
	Proxy在我们访问对象前添加了一层拦截，做一些处理验证
	语法：let p = new Proxy(target, handler);
		- target ：需要使用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
		- handler: 一个对象，其属性是当执行一个操作时定义代理的行为的函数(可以理解为某种触发器)。具体的handler相关函数请查阅官网
*/
