// 执行以下代码， 会有什么结果
const obj = {
  abc: 123
};

function func(num) {
  return `abc = ${this.abc + num}`;
}
console.log(func.call(obj, 1)); // abc = 124
console.log(func.bind(obj, 1)); 
/*
ƒ func(num) {
  return `abc = ${this.abc + num}`;
}
*/
/*
call、bind、apply

call(target, '','','')
apply(target, ['','',''])
bind(target, '', '')() // 返回的是函数 需要手动执行
*/