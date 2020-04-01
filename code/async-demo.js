// async
console.log('async', 100)
setTimeout(() => {
  // 这个函数就是 callback 回调函数
  console.log(200)
}, 1000);
console.log(300)
// 异步不会阻塞后面代码的执行
// 所以结果是 100 300 200


// sync
console.log('sync', 1000)
alert(2000) // 这里会阻塞代码向下执行(注意这里需要浏览器环境)
console.log(3000)