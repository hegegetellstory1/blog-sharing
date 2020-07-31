
let obj = {
  name:'hello',
  type:[1,2,3],
  content:{
    title:'nihao'
  }
}
// 手写深拷贝
// WeakMap跟Map结构类似，也拥有get、has、delete等方法，使用法和使用途都一样。
// WeakMap只接受对象作为键名，但null不能作为键名
// WeakMap不支持clear方法，不支持遍历，也就没有了keys、values、entries、forEach这4个方法，也没有属性size
// WeakMap 键名中的引用类型是弱引使用，
// 假如这个引使用类型的值被垃圾机制回收了，WeakMap实例中的对应键值对也会消失。WeakMap中的key不计入垃圾回收，即若只有WeakMap中的key对某个对象有引用，那么此时执行垃圾回收时就会回收该对象，而Map中的key是计入垃圾回收

// 判断类型是不是对象
function checkType(source) {
  // 1种写法
  return  Object.prototype.toString.call(source).slice(8,-1)
  // 2种写法
  // return typeof obj === 'object' && obj != null;

}

function copyDeep(source,map = new WeakMap()) {
    // 判断如果参数是不是一个对象，如果不是返回该参数
  let cloneObj, type = checkType(source)
    if(type =='object'){
      cloneObj = {}
    }else if(type =='Array'){
      cloneObj = []
    }else{
      return source
    }
    // 如果拷贝过该对象，则直接返回该对象
      if(map.get(source)){
      return source
      }
  // 如果不存在，我们放到map对象里
      map.set(source,cloneObj)
  //递归拷贝
  for(key in source){
    cloneObj[key] = copyDeep[source[key],map]
  }
  //最后返回克隆的值
  return cloneObj

}

console.log(copyDeep(obj))
