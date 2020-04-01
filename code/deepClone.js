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
  // 为了
  if(typeof obj !== 'object' || obj == null) {
    return obj;
  }
  
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for ( let key in obj ) {
    // 保证不是集成来的属性
    if(obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}