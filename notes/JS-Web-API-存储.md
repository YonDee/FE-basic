# 存储
## 典型题目
- 描述 cookie localStorage sessionStorage 区别

## cookie
- 本身用于浏览器和 server 通讯（客户端向服务器发起请求的时候会自动携带 cookie）
- 被“借用”到本地存储来（原本不属于本地存储的概念，在没有html5 的时候代替 localStorage 和 sessionStorage 来）
- 可用 document.cookie = '...'来修改（这个属性也可以获取到cookie）
> 随着 HTML5 的普及，cookie的应用逐渐还是回归到了本质上让 浏览器和 server 进行通讯。
```javascript
document.cookie = 'a=100; b=200'  // 这只有第一项被成功赋值
// 正确用法
document.cookie = 'a=100'
document.cookie = 'b=200'

document.cookie
// "a=100; b=200"
```
对`document.cookie`进行不同 key 的赋值操作是追加操作，相同 key 的赋值是覆盖操作

> cookie 最大存储 4kb 的数据（历史原因，cookie 在早期网络条件下不宜太大，每次请求都会携带，过大的数据携带在早期网络条件下非常不适用）

### cookie 的缺点
- 存储大小，最大 4kb
- http 请求时需要发送到服务端，增加请求数据量
- 只能用 document.cookie = '...'修改，太过简陋

## localStorage 和 sessionStorage
- HTML5 专门为存储设计，最大可存储**5M**
- API 简单易用 setItem getItem
- **不会随着 http 请求被发送出去**

用法
```javascript
localStorage.setItem('a', 100)
localStorage.getItem('a')
// "100"

sessionStorage.setItem('b', 200)
sessionStorage.getItem('b')
// "200"
```

- localStorage 数据会永久存储，除非代码或（从控制台）手动删除
- sessionStorage 数据只存于当前会话（session），浏览器关闭则清空
> 一般用 localStorage 会更多一些（一般用本地存储就是希望可以长期存储）

## 题解
cookie localStorage sessionStorage 区别？  
关键点：
- 容量
- API 易用性
- 是否跟随 http 请求发送出去
- 存储策略（存储和删除的方式规则）