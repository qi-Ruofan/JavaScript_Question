// JS的立即执行函数和作用域结合考察
// 执行以下代码， 会输出什么结果
var a = 123;
(function a () {
    a = 'abc';
    console.log(a);
})();

// 会输出
/*
ƒ a () {
    a = 'abc';
    console.log(a);
}
*/
// 立即执行函数 IIFE
// 如果立即执行函数名称跟内部变量名称重名，函数名称优先
// 在严格模式 'use strict'; 下该代码会报错