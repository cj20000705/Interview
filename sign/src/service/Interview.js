import fly from "@/utils/request";

// 获取面试列表
export let signList = payload => { 
  console.log(payload,'payload...5')
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

//更新面试信息
export let abandonInterview = params => {
  console.log(params,'params....')
  return fly.put(`/sign/${params.id}`,params)
}
