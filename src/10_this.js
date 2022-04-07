// 执行以下代码， 会有什么结果
var obj = {
  func: function(){
    return this.abc;
  },
  abc: 123
};

var func = obj.func; // 只引用了func，func中本身是没有abc的
var abc = func();

console.log(`abc = ${abc}`); // undefined