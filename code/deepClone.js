const obj1 = {
  name: 'Yang',
  last_name: 'Dee',
  obj_c: {
    say: 'Hello'
  },
  arr_c: [1, 2, 3]
}

const obj2 = deepClone(obj1)
obj2.name = 'Yon'
console.log(obj1.name)
console.log(obj2)

/**
 * 
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}){
  let result;
  // 判断如果不是对象/或者是null 则返回
  if(typeof obj !== 'object' || obj == null) {
    return obj;
  }
  // 判断是数组还是对象
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for ( let key in obj ) {
    // 保证不是继承来的属性
    if(obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}