<script>
import { login } from "@/service/";

export default {
  created() {
    // 调用API从本地缓存中获取数据
   
    // 调用登陆接口
    wx.login({  
      success: async res => {
        if (res.code) {
          //发起网络请求
          let data = await login(res.code);
          console.log("res123...", data);
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  }
};
</script>

<style>
page {
  width: 100%;
  height: 100%;
}
page > view {
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  width: 100%;
  height: 100%;
  list-style: none;
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
page , page>view {
  height: 100%;
}
</style>
