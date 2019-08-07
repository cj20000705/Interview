<template>
  <div class="home">
    <map id="map" :markers="markers" :longitude="longitude" :latitude="latitude" :ind="ind"></map>
    <cover-view class="play" bindtap="play"
    @click="location">
      <button>获取</button>
    </cover-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
      location:"home/getLocation"
    })
  },
  created() {}
};
</script>

 <style lang="scss" scoped>
map {
  width: 100%;
  height: 100%;
}
.play {
  position: fixed;
  bottom: 30rpx;
  left: 30rpx;
  border-radius: 50%;
  button {
    font-size: 40rpx;
    border-radius: 50%;
    padding: 0 10rpx;
    background: skyblue;
    color: #fff;
    box-sizing: border-box;
  }
}
</style>
 