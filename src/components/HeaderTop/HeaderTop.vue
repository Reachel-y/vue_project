<template>
  <div :class="[scrollTop > 50 ? 'background nav' : 'nav']">
    <!-- " -->
    <div class="nav_container" onscroll="myFunction()">
      <ul>
        <li><img :src="this.$store.state.content.logo1[0].fieldValue" alt="" /></li>
        <!-- v-for="(p,index) in this.$store.state.nav" :key="index" -->
        <!-- 利用v-for循环输出结果 -->
        <li v-for="(p,index) in Headernav" :key="index">
          <router-link :to="p.path" @click.native="saveNavId(p.id)">
            <span :class="[Id==p.id?'border_bottom':'']">{{p.name}}</span>
            </router-link>
          <!-- <a
            href="javascript:;"
            :class="{ on: '/index' === $route.path }"
            @click="goTo('/index')"
          >
            
          </a> --></li>
      
      </ul>
    </div>
  </div>
</template>

<script>
import {NAV,NavContent} from "../../api"
export default {
  data() {
    return {
      scrollTop: 0,
      Headernav:{},
      Id: localStorage.getItem('navId'),

    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
    NAV().then((res)=>{
       this.$store.commit('SET_NAV',res.data)
       this.Headernav=this.$store.state.nav
        //  console.log(this.$store.state.content.logo1[0].fieldValue)
    }).catch(function (error){
    console.log(error);
  });
  // 初始设置
    NavContent(this.Id)
      .then((res) => {
        // this.imgList = res;
        this.$store.commit("SET_NavContent", res.data);
        // console.log(this.Id)
        
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {

    handleScroll(e) {
      this.scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop;
      // console.log(this.scrollTop);
    },
    saveNavId(id){
      localStorage.setItem('navId',id)
      this.Id=id
      
     
    }

  },
  watch:{
    Id(newId){
      console.log('Id被修改了',newId,this.Id)
      NavContent(this.Id)
      .then((res) => {
        // this.imgList = res;
        this.$store.commit("SET_NavContent", res.data);
        console.log(this.Id)
        
      })
      .catch(function (error) {
        console.log(error);
      });
     }
  }
};

</script>

<style scope>
.border_bottom{
  border-bottom:3px red solid ;
}
.nav {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: fff;
}
.nav .nav_container {
  width: 80%;
  height: 100%;
  margin: 0 auto;

  background-color: rgba(255, 255, 255, 0);
  border-bottom: 2px solid #fff;
}
.nav ul {
  list-style-type: none;
  overflow: hidden;
  top: 0;
  display: flex;

  /*
        固定定位
        粘滞定位和相对定位特点基本一致
        不同的是粘滞定位可以在元素到达某个位置是将其固定
    */
}
.nav ul  li img{
  height: 100%;
  width: 100%;
  margin-top:-2px ;
}
.nav_container ul li {
  flex: 1;
}
.nav_container ul li span {
  line-height: 25px;
  font-size: 16px;
  width: 100px;

  /* margin-left: 80px; */
}
.nav_container ul li span:hover{
  border-bottom: 3px solid red;

}
.nav_container ul li a {
  display: block;
  text-decoration: none;
  color: white;
  margin-top: 30px;
  text-align: center;
}
.nav_container ul li a:hover {
  /*设置鼠标移入的元素*/
  color: #3f3f3f;

}


.nav_container ul li img {
  float: left;
  margin-left: 0px;
  padding-top: 25px;
}
.background {
  background-color: #fff;
  box-shadow: 0px 0px 10px gray;
}
.background a {
  color: #000 !important;
}
</style>