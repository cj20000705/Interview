<template>
  <div class="wrap">
    <map 
      id="map"
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
      style="width: 100%; height: 100%;"
    ></map>
    <span class="icon iconfont" @click='location'>&#xe6c6;</span>
  </div>
</template>
<script>
import "../../../font/iconfont.css";
import {mapState,mapActions} from 'vuex'
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        markers:[]
    }
  },
  computed:{
    ...mapState({
      longitude: state=>state.home.longitude,
      latitude: state=>state.home.latitude
    })
  },
  methods:{
    ...mapActions({
      location: 'home/getLocation'
    })
  },
  created(){
    console.log(this.latitude)
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
.icon {
  position: fixed;
  bottom: 30rpx;
  left: 30rpx;
  background: blue;
  font-size: 80rpx;
  color: #fff;
  border-radius: 50%;
}
</style>