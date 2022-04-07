// 执行以下代码，会输出什么内容
// 简单解释以下为什么会输出那些内容
['0', '1', '2'].map(parseInt) 
console.log(['0', '1', '2'].map(parseInt) )  // [0, NaN, NaN]
// parseInt(string, radix)接收两个参数字符串和基数
// radix 是2-36之间的整数，是被解析字符串的表示数字进制基数
// parseInt('0', 0), radix为0，是无效，默认为10
// parseInt('1', 1), radix为1，是无效，因为1进制的1不存在，等于 NaN
// parseInt('2', 2), radix为2，是无效，因为2进制的2不存在，等于 NaN