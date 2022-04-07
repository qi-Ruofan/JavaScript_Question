// JS的String和switch结合考察
// 执行以下代码， 会输出什么结果
var str = new String(123);
switch (str) {
  case '123': {
    console.log('string 123');
    break;
  } 
  case 123: {
    console.log(`number 123`);
    break;
  } 
  case undefined: {
    console.log(`undefined value`);
    break;
  } 
  default: {
    console.log('unknown value');
    break;
  } 
}
// 会输出 unknown value
// 1. var str = new String(123); 时候 str 是类 String的示例，类型是Object
// 2. switch 是严格比较，所以 str === '123' 为 false
// 3. 最后走到 default分支，输出 unknown value