// 实现数组扁平化
var arr = [ 0, 1, 2, 3, [ 4, 5, 6, 7, [ 8, 9, 10 ] ] ];
// 方法一：
function flatArray(val) {
   // TODO
  let result = []
  _flat(arr)
  function _flat(arr) {
    if(!Array.isArray(arr[0])) {
      result.push(arr[0])
    }
    arr.reduce((total, val, index, arr) => {
        if(Array.isArray(val)) {
          _flat(val)
        } else {
          console.log(val)
          result.push(val)
        }
      return val
    })
  }
  return result
}
flatArray(arr) // 输出 [0,1,2,3,4,5,6,7,8,9,10]

// 方法二：
function flatArray(arr) {
  let result = [];
  function _flat(a) {
    return a.reduce((acc, val) => {
      return Array.isArray(val) ? acc.concat(_flat(val)) : acc.concat(val)
    }, []);
  }
  return _flat(arr, result);
}
/* 
	array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
	function(total, currentValue, currentIndex, arr)
	* total：必需。初始值, 或者计算结束后的返回值。
	* currentValue：必需。当前元素。
	* currentIndex：可选。当前元素的索引
	* arr: 可选。当前元素所属的数组对象。
	initialValue
	* 可选。传递给函数的初始值

	判断数组的四种方法：
	- 原型方法：Array.prototype.isPrototypeOf(obj)
	- 构造函数：obj instanceof Array
	- 跨原型链调用：Object.prototype.toString.call(obj)
	- ES5：Array.isArray()
*/