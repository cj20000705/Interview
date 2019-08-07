<template>
  <div class="myinterviewWrap">
    <ul class="myinterviewLis">
      <li class="active">未开始</li>
      <li>已打卡</li>
      <li>已放弃</li>
      <li>全部</li>
    </ul>
    <div class="myinterviewBox" v-for="(item,index) in list" :key="index">
      <div class="myinterviewBoxFirst">
        <h3>{{item.company}}</h3>
        <!-- <span class="grays">未开始</span> -->
        <span class="blues">未提醒</span>
      </div>
      <div class="myinterviewBoxtMiddle"></div>
      <div class="myinterviewBoxBotton">
        <h3>面试时间:2019-07-20 20:20</h3>
        <!-- <span class="pinks">未提醒</span> -->
        <span class="blues">已打卡</span>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../font/iconfont.css";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: state => state.Interview.list
    })
  },
  components: {},
  methods: {
    ...mapActions({
      signList: "Interview/getsignList"
    })
  },
  created() {},
  mounted() {
    this.signList();
    console.log("list", this.list);
  }
};
</script>
<style lang="scss" scoped>
.myinterviewWrap {
  width: 100%;
  height: 100%;
  background: #eeee;
  .myinterviewLis {
    width: 100%;
    height: 88rpx;
    background: #fff;
    border-top: solid 1px #eee;
    display: flex;
    line-height: 88rpx;
    li {
      flex: 1;
      text-align: center;
    }
  }
}
.active {
  border-bottom: solid 1px skyblue;
  color: skyblue;
}
.myinterviewBox {
  width: 100%;
  height: 260rpx;
  background: #fff;
  margin-top: 20rpx;
}
.myinterviewBoxFirst {
  display: flex;
  justify-content: space-between;
  padding: 18rpx;
  box-sizing: border-box;
  h3 {
    font-weight: 500;
    font-size: 44rpx;
  }
  .grays {
    font-size: 34rpx;
    padding: 8rpx 16rpx;
    border: solid 1px #f4f4f5;
    color: #9d93b1;
    background: #f4f4f5;
  }
  .blues {
    font-size: 34rpx;
    padding: 8rpx 16rpx;
    border: solid 1px #cae4ff;
    color: #409eff;
    background: #ecf5ff;
  }
}
.myinterviewBoxtMiddle {
  font-size: 34rpx;
  color: #9d93b1;
  padding-left: 20rpx;
  box-sizing: border-box;
}
.myinterviewBoxBotton {
  padding: 0 20rpx;
  box-sizing: border-box;
  font-size: 36srpx;
  color: #666666;
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  .pinks {
    font-size: 34rpx;
    padding: 12rpx 22rpx;
    border: solid 1px #fef0f0;
    color: #f56c6c;
    background: #fef0f0;
  }
  .blues {
    font-size: 34rpx;
    padding: 12rpx 22rpx;
    border: solid 1px #cae4ff;
    color: #409eff;
    background: #ecf5ff;
  }
}
</style>

