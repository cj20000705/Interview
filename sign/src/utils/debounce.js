/**
 * 节流函数
 * @param func
 * @param wait
 * @param mustRun
 * @returns {Function}
 */
const throttle = function() {
  let timer = null
  return function(func, delay) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}
export default throttle()