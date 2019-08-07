import fly from "@/utils/request";

// 获取面试列表
export let signList = () => {
  return fly.get("/sign");
};
