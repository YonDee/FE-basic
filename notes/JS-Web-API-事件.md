# 事件
## 常见题目
- 编写一个通用的事件监听函数
- 描述事件冒泡的流程
- 无限下拉的图片列表，如何监听每个图片的点击  
### 无限下拉问题的关键点
- 事件代理
- 用 e.target 获取触发元素
- 用上方要 target 获取的元素，使用 matches 来判断匹配是否是触发元素

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
通用事件绑定函数（没有考虑到事件代理）
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
- 基于 DOM 树形结构
- 事件会顺着触发元素往上冒泡
- 应用场景： (事件)代理
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


## 事件代理
场景：例如瀑布流，子元素会无限加载，无法确定子元素，此时向包裹的父元素绑定事件，点击子元素时，利用事件冒泡机制“冒”到父元素上来触发事件。  

实现一个点击`<a>`标签弹出其中文本的提示框的事件，假设`<a>`标签可以无限加载
```javascript
const div = document.getElementById('div')
bindEvent(div, 'click', event => {
  event.preventDefault()
  const target = event.target
  // 判断是否是<a>标签
  if (target.nodeName === 'A') {
    alert(target.innertHTML)
  }
})
```  
事件代理的好处
- 代码简洁
- 减少浏览器内存占用
- 但是，不要滥用（要因地制宜，选择适合的场景使用）

## 通用事件绑定函数pro
```javascript
function bindEvent(elem, type, selector, fn) {
  // 判断是否有第四个参数，如果没有则将第四个参数传给第三个
  // 因为这里的 selector 是可选项
  if(fn == null){
    fn = selector
    selector = null
  }

  elem.addEventListener(type, event => {
    const target = event.target
    if(selector) {
      // 代理绑定
      // matches 判断选择的标签是否匹配
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}


// 用例1 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
  // 注意这里的函数不能使用箭头函数，不然在运行环境下，箭头函数的作用域可能是 window
  event.preventDefault()
  alert(this.innerHTML)
})

// 用例2 代理绑定
const div = document.getElementById('div')
bindEvent(div, 'click', 'a', function (event) {
  event.preventDefault()
  alert(this.innerHTML)
  // 如果用箭头函数，这里的 this, 替换成 event.target
})
```