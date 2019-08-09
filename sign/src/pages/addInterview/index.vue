<template>
  <div class="wrap">
    <header class="header">面试信息</header>
    <form @submit="submit" report-submit>
      <section class="main">
        <label for class="input_label">
          <p>公司名称</p>
          <input type="text" placeholder="请输入公司名称" v-model="firmName" />
        </label>
        <label for class="input_label">
          <p>公司电话</p>
          <input type="text" placeholder="请输入面试联系人电话" v-model="phone" />
        </label>
        <label for class="input_label">
          <p>面试时间</p>
          <picker
            class="picker"
            @change="dateChange"
            mode="multiSelector"
            :range="dateRange"
            :value="info.date"
            @columnchange="columnChange"
          >
            <view class="picker">{{dateShow}}</view>
          </picker>
          <span class="icon iconfont" @click="iconBtn">&#xe636;</span>
        </label>
        <label for class="input_label" @click="interviewAddress">
          <p>面试地址</p>
          <div class="addres" v-if="!addres.address">请输入地址</div>
          <div class="addres" v-else>{{addres.address}}</div>
          <!-- <input type="text" placeholder="请选择面试地址" :value='addres' v-model="interview"> -->
        </label>
      </section>
      <footer class="footer">
        <div class="footer_header">备注信息</div>
        <textarea
          v-model="description"
          name
          id
          cols="30"
          rows="10"
          class="text"
          placeholder="备注信息（可选，100个字以内）"
        ></textarea>
        <button class="confirm" form-type="submit">确认</button>
      </footer>
    </form>
  </div>
</template>
<script>
import "../../../font/iconfont.css";
import { mapState, mapMutations, mapActions } from "vuex";
const moment = require("moment");
const range = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
  props: {},
  components: {},
  data() {
    return {
      firmName: "",
      phone: "",
      interview: "",
      description: "",
      time: new Date().toLocaleDateString().replace(/\//g, "-"),
      ok: true,
      oks: false,
      info: {
        date: [0, 0, 0]
      },
      start_time: ""
    };
  },
  computed: {
    ...mapState({
      addres: state => state.address.addres
    }),
    // 处理面试日期
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
      } else {
        dateRange[1] = range[1];
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item => {
        return item + "点";
      });
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item => {
        return (
          moment()
            .add(item, "days")
            .date() + "号"
        );
      });
      return dateRange;
    },
    // 显示的日期
    dateShow() {
      return moment()
        .add(
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],
          "d"
        )
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  
    methods:{
        ...mapMutations({
            
        }),
        ...mapActions({
            AddInterview:'addInterview/AddInterview'
        }),
        // 监听多列选择器每列变化
        columnChange(e){
            let {column, value} = e.target;
            let date = [...this.info.date];
            date[column] = value;
            this.info.date = date;
        },
        //确定按钮
        submit(e) {
          let that = this
          //公司的非空
          if(that.firmName === '') {
              wx.showToast({
                    title: '请填写公司名称',
                    icon: 'none',
                    duration: 2000
              })
              return
          }
          //手机的非空
          if(that.phone === '' || !(/^1[3456789]\d{9}$/.test(that.phone))) {
            wx.showToast({
                    title: '请输入公司手机号',
                    icon: 'none',
                    duration: 2000
            })
              return 
          }
          //地址的非空
          if(that.addres === '') {
               wx.showToast({
                    title: '请输入地址',
                    icon: 'none',
                    duration: 2000
            })
              return 
          }
          // 添加时间戳到表单
          that.start_time = moment(this.dateShow).unix()*1000;
          wx.showModal({
            title: '温馨提示',
            content: '确定添加面试？',
            success (res) {
            if (res.confirm) {
                let obj = {
                    company:that.firmName, //公司名称
                    phone:that.phone,      //公司电话
                    form_id:e.target.formId,
                    latitude:that.addres.location.lat,
                    longitude:that.addres.location.lng,
                    description:that.description,
                    address:that.addres.address,
                    start_time:moment(that.dateShow).unix()*1000
                }
                that.AddInterview(obj)
            } else if (res.cancel) {
                console.log('用户点击取消')
            }
          }
        })
      },
      //icon提示
      iconBtn() {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
      },
      //点击跳转添加地址
      interviewAddress() {
          wx.navigateTo({
              url:"/pages/interviewAddress/main",
          })
      },
      //时间选择
       bindTimeChange(e) {
            this.time = e.mp.detail.value
      },
    },
    created(){
        // 如果当前时间是十一点之后，过滤掉今天
        if (moment().hour() == 23){
            this.info.date = [1,0,0];
        }
    },
  mounted() {}
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 88rpx;
  background: #f6f6f6;
  line-height: 88rpx;
  padding: 0 30rpx;
  font-size: 36rpx;
}
.main {
  padding: 0 30rpx;
  .input_label {
    border-bottom: 1px solid #ccc;
    display: flex;
    height: 92rpx;
    align-items: center;
    overflow: hidden;
    p {
      color: #9b9b9b;
      margin-right: 20rpx;
    }
    input {
      height: 100%;
      flex: 1;
    }
    &:last-child {
      border-bottom: 0;
    }
    .picker {
      flex: 1;
    }
    .addres {
      height: 100%;
      flex: 1;
      line-height: 92rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-right: 1%;
    }
  }
}
.footer {
  width: 100%;
  .footer_header {
    width: 100%;
    height: 88rpx;
    background: #f6f6f6;
    line-height: 88rpx;
    padding: 0 30rpx;
    font-size: 36rpx;
  }
  .text {
    width: 90%;
    height: 250rpx;
    border: 1px solid #ccc;
    margin: 40rpx 5%;
    border-radius: 2%;
  }
}
.confirm {
  background: #999999;
  color: #fff;
  border-radius: 0;
}
.icon {
  width: 50rpx;
  height: 50rpx;
  background: #197dbf;
  border-radius: 50%;
  display: inline-block;
  line-height: 50rpx;
  text-align: center;
  color: #fff;
  font-size: 36rpx;
}
</style>