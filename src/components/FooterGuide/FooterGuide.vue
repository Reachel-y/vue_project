<template>
  <div>
    <div class="footer_guide">
      <!-- 容器主体 -->
      <div class="footer-container">
        <div class="footer-logo">
          <img :src="this.result.logo2[0].fieldValue" alt="" />
        </div>
        <div class="footer-center">
          <i class="iconfont icon-dianhua1"></i>
          <span>{{getTel()}}</span><br />
          <i class="iconfont">&#xe620;</i>
          <span>{{getWebsite()}}</span><br />
          <i class="iconfont">&#xe626;</i>
          <span >{{getAddress()}}</span>
          <!-- <div>{{this.$store}}</div> -->
        </div>
        <div class="footer-right">
          <div>关注了解更多</div>
          <img :src="this.result.qrcode[0].fieldValue" alt="" />
        </div>
      </div>
      <div class="point">
        <span>版权所有 </span>
        <a href="">粤ICP备11057793号-5</a>
        <a href="">粤公网安备 44011402000611号</a>
      </div>
    </div>
  </div>
</template>

<script>
import {BASIC_INFO, NAV} from '../../api'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      result:{},
    }
  },
  methods:{
    getAddress(){  
      return this.result.address[0].fieldValue;
    },
     getTel(){
      // console.log(this.result.tel)
      return this.result.tel[0].fieldValue;
    },
    getWebsite(){
      //  console.log(this.result.website[0])
      return this.result.website[0].fieldValue
      
    },
  },
  mounted(){
    // console.log(mapState),
    
    BASIC_INFO().then( (response)=> {
      this.$store.commit('SET_DATA',response.data)
      this.result=response.data
    //  console.log(this.$store.state.content.address[0].fieldValue)
  })
  .catch(function (error) {
    console.log(error);
  });
  },
  computed:{
    ...mapState()
  },
};

</script>

<style>
.footer_guide {
  height: 250px;
  width: 100%;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
  justify-content: center;
}
.footer-container {
  display: flex;
  width: 85%;
  height: 80%;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
  justify-content: center;
  /* margin: 0px auto; */
  border-bottom: 1px solid white;
}
.footer_guide .footer-logo {
  
  flex: 1;
}
.footer_guide .footer-logo img{
  width: 40%;
}
.footer-center {
  flex: 1;
  font-size: 15px;
  color: white;
  line-height: 25px;
}
.footer-right {
  flex: 1;
  height: 150px;
  font-size: 19px;
  color: white;
  position: relative;
}
.footer_guide .footer-right img {
  position: absolute;
  right: 0;
  height: 100%;
}
.footer-right div {
  position: absolute;
  width: 19px;
  right: 35%;
  top: 10%;
}
.footer-right div::before {
  position: absolute;
  top: -10%;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
 border: 1px solid white;
  content: "";
}
.footer-right div::after {
  position: absolute;
  bottom: -15%;
    left: 10%;
display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid white;
  content: "";
}
.point {
  text-align: center;
}
.point span {
  color: white;
}
.point a {
  color: #939393;
}
</style>