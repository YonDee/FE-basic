// 一般 bind 的用法
function fn1(a, b, c) {
  console.log('this.', this)
  console.log(a, b, c)
  return 'this is fn1'
}

const fn2 = fn1.bind({x: 100}, 10, 20, 30)
console.log(fn2())


// 模拟 bind
Function.prototype.bind2 = function() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  // 获取 this （数组第一项）
  const t = args.shift()

  // fn1.bind(...) 中的 fn1
  const self = this

  // 返回一个函数，作为闭包返回，bind规定只能返回函数，不能执行
  return function() {
    return self.apply(t, args)
  }
}


const fn3 = fn1.bind2({x: 100}, 10, 20, 30)
console.log(fn3())