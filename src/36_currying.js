// JS笔试-10分钟实现
// 实现函数柯里化
function curry(fn, args) { // 接收一个函数，接收参数
  // TODO
  // 1. 获取任务函数参数的长度
  let len = fn.length || 0
  args = args || [] // 
  return function(...rest) { // 接收实参
  	const _args = [...args, ...rest]; // 合并参数
  	 if (_args.length < len) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}

function add(a, b, c) {
  return a + b + c;
}
var func = curry(add);

console.log(func(1)(2)(3)) // 6
console.log(func(1, 2)(3)) // 6
console.log(func(1)(2, 3)) // 6

/*
	函数柯里化：
		高阶函数的一个特殊用法
		把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数
	Currying有什么用处：
		1. 参数复用
		2. 提前确认
		3. 延迟运行
	curry的一些性能问题：
		1. 存取arguments对象通常要比存取命名参数要慢一点
		2. 一些老版本的浏览器在arguments.length的实现上是相当慢的
		3. 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
		4. 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上
		大部分应用中，主要的性能瓶颈是在操作DOM节点上，这js的性能损耗基本是可以忽略不计的，所以curry是可以直接放心的使用。
*/
// 	通用Currying封装-初步封装
var currying = function(fn) {
    // args 获取第一个方法内的全部参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
        // 将后面方法里的全部参数和args进行合并
        var newArgs = args.concat(Array.prototype.slice.call(arguments))
        // 把合并后的参数通过apply作为fn的参数并执行
        return fn.apply(this, newArgs)
    }
}
// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}