<template>
  <div>
  <HeaderTop/>   

    <!-- <keep-alive> -->
      <div style="min-height:50em;"> <router-view/></div>
     
    <!-- </keep-alive> -->
  <FooterGuide/>
</div>
</template>

<script>
import HeaderTop from '../components/HeaderTop/HeaderTop.vue'
import FooterGuide from '../components/FooterGuide/FooterGuide'
import {BASIC_INFO} from '../api'
// import baseURL from '../../config'
export default {
  name: 'App',
  mounted(){
   
    
    BASIC_INFO().then(function (response) {
    // console.log(response)//.data.data.address[0].fieldValue);
  })
  .catch(function (error) {
    console.log(error);
  });
    // console.log(axios);
  },
  components: {
    HeaderTop,
    FooterGuide
  }
}
</script>

<style>
*{padding:0;
 margin:0;
 box-sizing: border-box;
 font-size: 14px;
 text-decoration: none;
list-style: none;
}
</style>
