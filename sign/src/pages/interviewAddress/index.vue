<template>
    <div class="wrap">
        <header class="header">
            <span>北京</span>
            <div><input type="text" placeholder="面试地址" v-model='changeInput' @input="changInput"></div>
        </header>
        <section class="main">
            <ul>
                <li 
                v-for="item in addressList" 
                :key="item.id"
                @click='clickBtn(item)'
                >
                    <span class="icon iconfont">&#xe647;</span>
                    <div>
                        <p>{{item.title}}</p>
                        <span>{{item.address}}</span>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import "../../../font/iconfont.css";
import { mapState , mapActions , mapMutations } from 'vuex'
import { throttle } from '../../utils/debounce'
export default {
  props: {},
  components:{

  },
    data(){
        return {
            changeInput:'',
        }
    },
    computed:{
        ...mapState({
            addressList:state => state.address.addressList,
        }),
    },
    methods:{
        ...mapActions({
            getSuggestion:'address/getSuggestion',
        }),
        ...mapMutations('address',['upgetAddres']),
        changInput() {
            this.getSuggestion(this.changeInput);
        },
        clickBtn(item) {
            this.upgetAddres(item)
            wx.navigateBack({
               delta: 1
            })
        }
    },
    created(){
        this.getSuggestion = throttle(this.getSuggestion, 1000);
    },
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 88rpx;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 0 50rpx;
    border-right: 1px solid #ccc;
  }
  div {
    flex: 1;
    overflow: hidden;
    margin-left: 20rpx;
    input {
      width: 100%;
      height: 100%;
    }
  }
}
.main {
  flex: 1;
  overflow-y: auto;
  ul {
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(175, 173, 173);
      padding: 10rpx 0;
      .icon {
        font-size: 55rpx;
        padding: 0 50rpx;
        color: rgb(66, 115, 248);
      }
      div {
        span {
          font-size: 24rpx;
          color: #ccc;
        }
      }
    }
  }
}
</style>