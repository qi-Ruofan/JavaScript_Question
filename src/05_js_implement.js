	// 执行以下代码
	// console.log 各自会打印什么信息
	var a = (b = 1);
	(() =>{
	  var a = (b = 2);
	})();
	console.log(`a = ${a}`); //  'a = 1'
	console.log(`b = ${b}`); // 'b = 2'
	// 解题，上述代码可以变成以下的执行过程
	var a = (window.b = 1);
	(() =>{
	  // 此处 a为闭包里局部变量
	  var a = (window.b = 2);
	})();