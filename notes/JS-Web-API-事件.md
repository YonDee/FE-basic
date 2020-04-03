# 事件
## 常见题目
- 编写一个通用的事件监听函数
- 描述事件冒泡的流程
- 无限下拉的图片列表，如何监听每个图片的点击

## 知识点
- 事件绑定
- 事件冒泡
- 事件代理

## 事件绑定
一个基础的事件绑定
```javascript
// 给 ID 为 btn 的元素绑定click事件，点击后控制台输出 clicked
const btn = document.getElementById('btn')
btn.addEventListener('click', event => {
  console.log('clicked')
})
```
通用事件绑定函数
```javascript
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}

const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', event => {
  // console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
  alert('clicked')
})
```
> 很多标签自己拥有一定的行为，例如`<a>`标签会跳转，如果给其绑定事件，只需要在绑定事件时使用`event.preventDefault()`阻止默认行为

## 事件冒泡
节点树中的节点彼此拥有层级关系，事件的触发顺序就是从点击位置DOM元素开始一层层向外触发事件，包裹节点的父级节点都可以监听到事件，可以从`event.target`中获取到触发的元素。  
默认情况下，不阻止事件冒泡，事件会向上触发，比如点击了一个元素节点中的子元素节点，子元素绑定了一个事件，事件会向上冒泡触发父元素的绑定事件。**阻止事件冒泡**使用`event.stopPropagation()`
```javascript
const p1 = document.getElementById('p1')
// bindEvent 参考上面的通用事件绑定函数
bindEvent(p1, 'click', event => {
  event.stopPropagation() // 阻止事件冒泡
  console.log('on')
})

const body = document.body
bindEvent(body, 'click', event => {
  console.log('off')
})
```
这里因为阻止事件的冒泡，所以避免了，在点击 p1 元素的时候触发本身绑定事件后，因为冒泡机制导致 body 绑定的事件被触发。


