// JS问答 escape/encodeURI/encodeURIComponent的区别

// ------------------ 解答 ------------------
// escape 是对普通字符串进行编码，
// encodeURI 是URL进行编码，但是不会对这些字符编码 ASCII字母 数字 ~!@#$&*()=:/,;?+'
// encodeURI 常用编码整个URL
// encodeURIComponent 也是对URL进行编码，但是不会对下列字符编码 ASCII字母 数字 ~!*()'
// encodeURIComponent 常用编码URL参数