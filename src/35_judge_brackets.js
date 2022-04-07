// JS笔试-10分钟实现
// 实现判断括号字符串是否为正确闭合
function check(str) {
  // TODO

}

console.log(check('{[()]}[{()}]')); // 输出 true
console.log(check('()[]{}[]{}')); // 输出 true
console.log(check('([]){')); // 输出 false
console.log(check('([){]}{}[]')); // 输出 false

// ------------------ 解答 ------------------
function check(str) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map[char]) {
      stack.push(map[char])
    } else if (stack.length > 0 && char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(check('{[()]}[{()}]'));
console.log(check('()[]{}[]{}'));
console.log(check('([){]}{}[]'));