<template>

   <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(p,index) in ImgList" :key="index">
          <img :src="p.image" alt="" />
        </div>
        
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
export default {
  props:[
    'ImgList',
  ],
  mounted(){
    var mySwiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true, //可以循环轮播
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  watch:{
    ImgList(value){
      this.$nextTick(()=>{
      
    })
  }
    }
    

}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 50em;
  --swiper-theme-color: #ff6600;
}
.swiper-slide {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.swiper-slide img {
  width: 100%;
}
</style>