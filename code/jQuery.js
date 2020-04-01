class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
  }

  get(index) {
    return this[index]
  }

  each(fn) {
     for (let i = 0; i < this.length; i++){
       const elem = this[i]
       fn(elem)
     }
  }

  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
  //... 其他的 DOM 操作 API
}

// 插件（所属 class 依然是 jQuery）
jQuery.prototype.dialog = function (info) {
  alert(info)
}

class myJQuery extends jQuery {
  constructor(selector){
    super(selector)
  }

  addClass(className) {
    
  }

  style(data) {
    
  }
}


// 调试操作
// const $p = new jQuery();
// $p.get(1)
// $p.each(elem => console.log(elem.nodeName))
// $p.on('click', () => alert('hello'))