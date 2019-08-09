import fly from "@/utils/request";

// 获取面试列表
export let signList = payload => {
  //全部
  if (payload.status === 2) {
    return fly.get("/sign", { page: payload.page, pageSize: payload.pageSize });
  } else {
    return fly.get("/sign", payload);
  }
};
//获取面试详情
export let signDetail = id => {
  return fly.get(`/sign/${id}`);
};
//添加面试
export let addInterview = params => {
  return fly.post("/sign", params);
};
//更新面试信息接口
export let updateInterview = (id, payload) => {
  return fly.put(`/sign/${id}`, payload);
};
