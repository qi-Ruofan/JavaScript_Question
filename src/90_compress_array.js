// ['a', 'b', 'b', 'b', 'c', 'c', 'c', 'c']
// 连续相同字符压缩合并基数
// 所以压缩成  ['a', 'b', '3', 'c', '4']
function compress(chars) {
  // TODO
  let n = 1
  let result = []
  for(let i = 0; i < chars.length; i++ ) {
    if(chars[i] === chars[i+1]) {
      n++
    } else {
      result.push(chars[i])
      if(n > 1) {
        result.push(n)
        n = 1
      }
    }
  }
  return result
};

console.log(compress(['a', 'b', 'b', 'b', 'c', 'c', 'c', 'c']));
// ['a', 'b', '3', 'c', '4']