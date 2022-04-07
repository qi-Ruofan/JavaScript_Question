	// 执行以下代码
	// console.log 各自会打印什么信息
	function A() { return 1 };
	function B() { return true };
	function C() { return { abc: 123 } };
	function D() { return null };
	function E() { return undefined };
	 
	console.log(new A()); // {}
	console.log(new B()); // {}
	console.log(new C()); // {abc: 123}
	console.log(new D()); // {}
	console.log(new E()); // {}
	   
	/**
	 *「new的过程」：
	 * 以构造器的 prototype 属性（注意与私有字段[[prototype]]的区分）为原型，创建新对象；
	 * 将 this 和调用参数传给构造器，执行；（constructor.apply(obj, argsments)）
	 * 如果构造器返回的是对象，则返回，否则返回第一步创建的对象。
	 */