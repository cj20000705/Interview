<template>
  <div class="myinterviewWrap">
    <ul class="myinterviewLis">
      <li
        v-for="(item,index) in tabList"
        :class="{'active':index==ind}"
        :key="item.id"
        @click="tabClass({index,status:item.status})"
      >{{item.title}}</li>
    </ul>
      <scroll-view scroll-y class="myinterviewBoxWrap" style="height: 100%">
        <div v-if="list.length>0">
          <div
            v-for="(item,index) in list"
            class="myinterviewBox"
            :key="index"
            @click="myinterviewDetail(item.id)"
          >
            <div class="myinterviewBoxFirst">
              <h3>{{item.company}}</h3>
              <span :class="{blues:item.status===0,pinks:item.status===1}">{{status}}</span>
            </div>
            <div class="myinterviewBoxtMiddle">
              <p>{{item.address}}</p>
            </div>
            <div class="myinterviewBoxBotton">
              <h3>面试时间:{{item.start_time}}</h3>
              <!-- -1表示未提醒，0表示已提醒 -->
              <span :class="{grays:item.status === 1}">{{item.remind === -1 ? "未提醒" : "已提醒"}}</span>
            </div>
          </div>
        </div>
        <div v-else class="nomyinterview">当前分类还没有面试!</div>
      </scroll-view>
  </div>
</template>

<script>
import "../../../font/iconfont.css";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      ind: 0,
      page: 1,
      pageSize: 6
    };
  },
  computed: {
    ...mapState({
      list: state => state.Interview.list,
      tabList: state => state.Interview.tabList
    }),
    //判断state  -1表示未开始，0表示已打卡，1表示已放弃
    status() {
      let str = "";
      this.list.forEach(item => {
        if (item.status === -1) {
          str = "未开始";
        } else if (item.status === 1) {
          str = "已放弃";
        } else {
          str = "已打卡";
        }
      });
      return str;
    }
  },
  methods: {
    ...mapActions({
      signList: "Interview/getsignList"
    }),
    myinterviewDetail: id => {
      const url = "/pages/myinterviewDetails/main?id=" + id;
      mpvue.navigateTo({ url });
    },
    tabClass(payload) {
      this.ind = payload.index;
      this.page = 1;
      this.signList({
        status: payload.status,
        page: this.page,
        pageSize: this.pageSize
      });
    }
  },
  //刚进来页面的显示
  onShow() {
    this.signList({ status: -1, page: this.page, pageSize: this.pageSize });
  },
  created() {},
  mounted() {
    this.signList();
  }
};
</script>
<style lang="scss" scoped>
.myinterviewWrap {
  width: 100%;
  height: 100%;
  background: #eeee;
  overflow: hidden;
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
.myinterviewBoxWrap {
  width: 100%;
  .myinterviewBox {
    width: 100%;
    height: 320rpx;
    background: #fff;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin-top: 20rpx;
    .nomyinterview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
.myinterviewBoxFirst {
  display: flex;
  justify-content: space-between;
  padding: 40rpx 20rpx;
  box-sizing: border-box;

  h3 {
    font-weight: 500;
    font-size: 44rpx;
  }
  .grays {
    font-size: 34rpx;
    padding: 8rpx 16rpx;
    border: solid 1px #cae4ff;
    color: red;
    background: #ecf5ff;
  }
  .blues {
    font-size: 34rpx;
    padding: 8rpx 16rpx;
    border: solid 1px #cae4ff;
    color: #409eff;
    background: #ecf5ff;
  }
  .pinks {
    font-size: 34rpx;
    padding: 8rpx 16rpx;
    border: solid 1px #fef0f0;
    color: #f56c6c;
    background: #fef0f0;
  }
}
.myinterviewBoxtMiddle {
  font-size: 34rpx;
  color: #9d93b1;
  padding: 20rpx;
  box-sizing: border-box;
  p {
    width: 100%;
    padding-right: 20rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.myinterviewBoxBotton {
  padding: 0 20rpx;
  box-sizing: border-box;
  font-size: 36srpx;
  color: #666666;
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 34rpx;
    padding: 8rpx 16rpx;
    border: solid 1px #cae4ff;
    color: #409eff;
    background: #ecf5ff;
  }
  .grays {
    font-size: 34rpx;
    padding: 12rpx 20rpx;
    border: solid 1px #f4f4f5;
    color: #9d93b1;
    background: #f4f4f5;
  }
}
</style>

