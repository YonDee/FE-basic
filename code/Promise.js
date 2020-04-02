function loadImg(src) {
  // Promise 构造函数中传入一个函数参数，函数参数具有两个参数resolve 和 reject
  const p = new Promise(
    (resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图片加载失败 ${src}`)
        reject(err)
      }
      img.src = src
    }
  )
  return p
}

const url = './images/8fea996a-3974-4eda-a990-c1ddbdc92b40.jpg'
loadImg(url).then(img => {
  //then 这里获取 promise 中 resolve 所返回的内容
  console.log(img.width)
  return img
}).then(img => {
  // 这个函数中的img参数是上面 then 的回调函数中所返回的 img
  console.log(img.height)
}).catch(ex => console.log(error(ex)))
// 最后捕获错误，来自 promise 中 reject 的返回

// 根据上面的应用场景模拟按顺序加载两张图片
const url1 = './images/8fea996a-3974-4eda-a990-c1ddbdc92b40.jpg'
const url2 = './images/3F101B3BEA53B4D28E1708E936B9227C.jpg'
loadImg(url1).then(img1 => {
  console.log(img1.width)
  return img1 // 返回对象
}).then(img1 => {
  console.log(img1.height)
  return loadImg(url2) // 返回 Promise 实例
}).then(img2 => {
  // 这里是获取上面 Promise 实例中 resolve 所返回的内容
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.height)
}).catch(ex => console.error(ex))
