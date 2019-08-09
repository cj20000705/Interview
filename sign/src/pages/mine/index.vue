<template>
  <div class="mineWrap">
    <div class="mineTop">
      <div class="mineTx">
        <span class="icon iconfont tx">&#xe678;</span>
      </div>
      <div class="mainTel">{{phone}}</div>
    </div>
    <div class="mineList">
      <div class="mineListDls" @click="myinterviews">
        <div>
          <span class="icon iconfont time">&#xe60a;</span>

          <span class="interview">我的面试</span>
        </div>
        <div class="right">&gt;</div>
      </div>
      <div class="mineListDls">
        <div>
          <span class="icon iconfont time">&#xe636;</span>
          <span class="interview">客服中心</span>
        </div>
        <div class="right">&gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../font/iconfont.css";
import { mapState, mapActions ,mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
      ...mapState({
        phone: state => state.decrypt.phone
      })
  },
  components: {},
  methods: {
    myinterviews() {
      wx.navigateTo({
        url: "/pages/myinterview/main"
      });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.mineWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .mineTop {
    width: 100%;
    height: 370rpx;
    background: #f4f6f9;
    text-align: center;
  }
}
.mineTx {
  width: 144rpx;
  height: 144rpx;
  background: #fff;
  border-radius: 50%;
  margin: 50rpx auto;
  line-height: 144rpx;
  .tx {
    color: #197dbf;
    font-size: 74rpx;
  }
}
.mineList {
  width: 100%;
  height: auto;
  .mineListDls {
    width: 100%;
    height: 110rpx;
    border-bottom: solid 1px #ccc;
    display: flex;
    justify-content: space-between;
    line-height: 110rpx;
    padding: 0 40rpx;
    box-sizing: border-box;
    div {
      .time {
        font-size: 56rpx;
        color: #fff;
        border-radius: 50%;
        background: #10aeff;
      }
      .interview {
        margin-left: 26rpx;
        font-size: 44rpx;
        color: #666;
      }
    }
  }
}
.right {
  font-size: 44rpx;
  color: #666;
  font-weight: 600;
}
</style>
