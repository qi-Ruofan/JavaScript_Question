// JS笔试-实现bind操作
const obj = {
  data: 'abc',
  func: function() {
    console.log(this.data);
  }
}

Function.prototype.bind2 = function (target) {
  // TODO
  const _this = this
  return function() {
  	_this.apply(target)
  }
}

const func = obj.func.bind2(obj);
func(); // 'abc'