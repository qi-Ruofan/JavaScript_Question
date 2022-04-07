var a = {}
	 
function isNullObject() {
  // TODO
 
}


// 方法一：Object.keys()
// 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。
// 缺点：不能判断 Symbol属性和内置属性
// 例如判断不出 { [Symbol(1)]: 123 }
// Object.keys(obj).length 获取对象中可直接枚举属性的长度

// 方法二：Object.getOwnPropertyNames()
// 优点：可以判断出对象原生内置属性例如 Object.getOwnPropertyNames(new Array()) = ['length’]
// 缺点：不能判断 Symbol属性，例如 { [Symbol(1)]: 123 }

// 方法三：Object.getOwnPropertyNames() + Object.getOwnPropertySymbols()