// JS笔试-实现一个LazyMan
/*
const man = new LazyMan('Mick');
man.eat('Rice')
  .sleep(1000)
  .eat('Apple')
  .sleepFirst(1000);
  
// 最终输出结果
// "First sleep 1000ms ..." (延时1000ms)
// "My name is Mick"
// "Eating Rice"
// "Sleep 1000ms ..." (延时1000ms)
// "Eating Apple"
*/

class LazyMan {
	constructor(name) {
		this._tasks = [];
    this._tasks.push(async () => {
      console.log(`My name is ${name}`);
    });
    setTimeout(() => {
      this._next();
    }, 0)
	}
  // TODO
  sleepFirst(time) {
    // TODO
  }
  sleep(time) {
    // TODO
  }
  eat(food) {
    // TODO
  }
}
const man = new LazyMan('Mick');
man
  .eat('Rice') // 打印 "Mick is eating Rice"
  .sleep(1000) // 打印"sleep 1000ms ..." 延时等待 1000ms  
  .eat('Apple') // 打印 "Mick is eating Apple"
  .sleepFirst(1000) // 首次 打印"first sleep 1000ms ..." 延时等待 1000ms
  
// 最终输出结果
// "First sleep 1000ms ..." (延时1000ms)
// "My name is Mick"
// "Eating Rice"
// "Sleep 1000ms ..." (延时1000ms)
// "Eating Apple"