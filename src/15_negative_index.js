  // TODO
  let len = arr.length
  return new Proxy(arr, {
    get(target, key) {
      key = +key
      while(key < 0) {
        key += len
      }
      return console.log(target[key])
    }
  })
}
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = createArray(arr);

a[1]; // 0
a[-1]; // 9
a[-2]; // 8