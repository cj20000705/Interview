import fly from "@/utils/request";

// 获取面试列表
export let signList = params => {
  //全部

  return fly.get("/sign", params);
};
//获取面试详情
export let signDetail = id => {
  return fly.get(`/sign/${id}`);
};
