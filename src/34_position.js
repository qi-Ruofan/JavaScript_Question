// 考察JS的位运算
// 执行以下代码， 会输出什么结果
var num1 = 0x111213;
var num2 = (num1 & 0xff0000) >> 16;
var num3 = (num1 & 0x00ff00) >> 8;
var num4 = (num1 & 0x0000ff);
console.log(num2);
console.log(num3);
console.log(num4);

// ------------------ 解答 ------------------
// 会输出 17, 18, 19
// 声明定义 num1 是十六进制的数
var num1 = 0x111213;
// num1 & 0xff0000 进行“与”操作，提取十六进制6位数的1-2位
// num1 & 0xff0000 = 0x110000
// (num1 & 0xff0000) >> 16 是将 0x110000 变成二进制，向右位移16位
// (num1 & 0xff0000) >> 16 = 0x110000 >> 16 = 0x11 = 16 * 1 + 1 = 17
var num2 = (num1 & 0xff0000) >> 16;
// num1 & 0x00ff00 进行“与”操作，提取十六进制6位数的中间3-4位
// num1 & 0x00ff00 = 0x001200
// (num1 & 0x00ff00) >> 8 是将 0x001200 变成二进制，向右位移8位
// (num1 & 0x00ff00) >> 8 = 0x001200 >> 8 = 0x12 = 16 * 1 + 2 = 18
var num3 = (num1 & 0x00ff00) >> 8;
// num1 & 0x0000ff 进行“与”操作，提取十六进制6位数的第5-6位
// num1 & 0x0000ff = 0x13 = 16 * 1 + 3 = 19
var num4 = (num1 & 0x0000ff);
console.log(num2); // 17
console.log(num3); // 18
console.log(num4); // 19