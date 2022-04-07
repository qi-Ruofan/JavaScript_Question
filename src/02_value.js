	// 执行以下代码
	// console.log 各自会打印什么信息
	const data = {
	  valueOf: () => 123, // 设置 data 返回该对象的原始值 123
	  toString: () => 'abc', // 设置 data 返回该对象的字符串 'abc'
	}
	 
	// 抽象（非严格）相等比较 时候，data是调用valueOf，为 123 == 123, 
	// data 直接使用对象原始值 valueOf() 来比较 123 == 123 为 true
	console.log(data == 123); 
	// 严格相等比较 时候，是data的类型是object，不是number
	// 所以 data === 123 为false
	console.log(data === 123); 
	// `${data}` ES6的字符串模板是将变量的字符串表示显示出来
	// 所以 `${data}` 是调用 data.toString() 返回字符串表示
	console.log(`${data}` === 'abc'); 
	// data + '' 是将 data 的对象值转换成字符串
	// 所以等于 123 + '' = '123', '123' === 'a'为false
	console.log(data + '' === 'abc');