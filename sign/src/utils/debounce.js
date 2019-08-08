/**
 * 节流函数
 * @param func
 * @param wait
 * @param mustRun
 * @returns {Function}
 */
//防抖函数
const debounce = function(func, delay) {
  let timer = 0;
  
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}
//节流函数
const throttle = function(func, delay) {
  let timer = +new Date();
  
  return function() {
    let cur = +new Date();
    if (cur - timer > delay){
      func(...arguments);
      timer = cur;
    }
  }
}
export { debounce , throttle }