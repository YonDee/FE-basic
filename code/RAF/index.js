// 3s 把宽度从 100px 变为 640px，即增加 (640-100)540px
// 60 帧/s，3s 就是 (3*60) 180 帧（我们这个动画所需要的帧数总和），每次变化 (需要增加的像素/动画帧数总和 540/180) 3px

const div1 = document.getElementById('div1')
let curWidth = 100
const maxWitdh = 640

// setTimeout
// function animate() {
//   curWidth = curWidth + 3
//   div1.style.width = curWidth + "px";
//   if(curWidth < maxWitdh){
//     setTimeout(animate, 16.7);
//   }
// }

// RAF
function animate() {
  curWidth = curWidth + 3
  div1.style.width = curWidth + "px";
  if(curWidth < maxWitdh){
    window.requestAnimationFrame(animate) // 浏览器会自己设置最佳时间，并且切换标签会暂停动画
  }
}

animate()