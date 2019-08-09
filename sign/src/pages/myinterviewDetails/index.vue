<template>
  <div class="myinterviewDetailsWrap">
    <div class="myinterviewDetailsList">
      <span>面试地址:</span>
      <h3>{{detailList.address}}</h3>
    </div>
    <div class="myinterviewDetailsList">
      <span>面试时间:</span>
      <h3>{{detailList.start_time}}</h3>
    </div>
    <div class="myinterviewDetailsList">
      <span>联系方式:</span>
      <h3>{{detailList.phone}}</h3>
    </div>
    <div class="myinterviewDetailsList">
      <span>是否提醒:</span>
      <h3>未提醒</h3>
    </div>
    <div class="myinterviewDetailsList">
      <span>面试状态:</span>
      <h3>未开始</h3>
    </div>
    <div class="myinterviewDetailsList">
      <span class="cancel">取消提醒:</span>
      <div class="body-view">
        <switch @change="switch1Change"/>
      </div>
    </div>
    <div class="btns">
      <button class="leftBtns">去打卡</button>
      <button class="rightBtns" @click="abandons">放弃面试</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      detailList: state => state.Interview.detailList
    })
  },
  components: {},
  methods: {
    ...mapActions({
      detail: "Interview/myinterviewDetail",
      abandon: "abandon/abandonInterview"
    }),
    switch1Change(e){
       console.log('switch1 发生 change 事件，携带值为', e.mp.detail.value)
       if(e.mp.detail.value) {
          this.abandon({id:this.detailList.id,remind:1})
       } 
    },
    abandons() {
      let that = this
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success (res) {
          if (res.confirm) {
            that.abandon({id:that.detailList.id,status:1,remind:1})
            // console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  mounted() {
    
  },
  onLoad(options) {
    const id = options.id;
    this.detail(id);
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.myinterviewDetailsWrap {
  width: 100%;
  height: 100%;
  .myinterviewDetailsList {
    width: 100%;
    height: 100rpx;
    display: flex;
    padding: 0 20rpx;
    box-sizing: border-box;
    border-bottom: solid 2rpx #ccc;
    line-height: 100rpx;
    font-size: 32rpx;
    span {
      color: #666;
    }
    h3 {
      color: #333;
      margin-left: 40rpx;
    }
  }
  .btns {
    width: 100%;
    display: flex;
    .leftBtns,
    .rightBtns {
      width: 320rpx;
      height: 120rpx;
      text-align: center;
      line-height: 120rpx;
      color: #fff;
      border: 0;
      margin-top: 50rpx;
    }
    .leftBtns {
      background: #197dbf;
    }
    .rightBtns {
      background: #dc4e42;
    }
  }
}
.cancel {
  margin-right: 40rpx;
}
</style>
