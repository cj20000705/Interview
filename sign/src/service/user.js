import fly from '@/utils/request';

// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}
//添加面试
export let addInterview = (res) => {
  return fly.post('/sign')
}