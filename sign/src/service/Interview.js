import fly from "@/utils/request";

// 获取面试列表
export let signList = () => {
  return fly.get("/sign");
};
//获取面试详情
export let signDetail = id => {
  return fly.get(`/sign/${id}`);
};
//添加面试
export let addInterview = (params) => {
  return fly.post('/sign',params)
}