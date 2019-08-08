<template>
  <div class="home">
    <map
      id="map"
      :markers="markers"
      show-location
      :longitude="longitude"
      :latitude="latitude"
      :ind="ind"
    ></map>

    <div class="play" bindtap="play" @click="location">
      <span class="icon iconfont">&#xe63b;</span>
    </div>
    <div class="portrait" @click="gotoMine">
      <span class="icon iconfont">&#xe678;</span>
    </div>
    <div class="addInterview" @click="gotoAddinterview">添加面试</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      markers: []
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },
  components: {},
  methods: {
    ...mapActions({
      location: "home/getLocation",
      getSuggestion: "mine/getSuggestion"
    }),
    ...mapMutations(["updateLocation"]),
    gotoMine() {
      wx.navigateTo({
        url: "/pages/mine/main"
      });
    },
    gotoAddinterview() {
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    }
  },
  mounted() {
    this.getSuggestion("八维");
  },
  created() {}
};
</script>

 <style lang="scss" scoped>
map {
  width: 100%;
  height: 100%;
}
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.play {
  position: absolute;
  bottom: 140rpx;
  left: 40rpx;
  border-radius: 50%;
  span {
    font-size: 74rpx;
    color: steelblue;
    font-weight: 700;
  }
}
.addInterview {
  width: 100%;
  height: 100rpx;
  background: black;
  line-height: 100rpx;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
}
.portrait {
  position: absolute;
  bottom: 140rpx;
  right: 40rpx;
  background: black;
  width: 90rpx;
  height: 90rpx;
  text-align: center;
  line-height: 90rpx;
  border-radius: 50%;
  span {
    font-size: 60rpx;
    color: steelblue;
    font-weight: 700;
  }
}
</style>
 
