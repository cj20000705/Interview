<template>
  <div class="wrap">
   <section class="main">
      <map 
      id="map"
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
      style="width: 100%; height: 100%;"
      ></map>
      <span class="icon iconfont" @click='location'>&#xe6c6;</span>
      <footer class="footer">
        <span>添加面试</span>
      </footer>
    </section>
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
.main {
  width: 100%;
  height: 100%;
}
.icon {
  position: fixed;
  bottom: 120rpx;
  left: 30rpx;
  background: blue;
  font-size: 80rpx;
  color: #fff;
  border-radius: 50%;
}
.footer {
  width: 100%;
  height: 88rpx;
  background: black;
  color: #fff;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 88rpx;
}
</style>