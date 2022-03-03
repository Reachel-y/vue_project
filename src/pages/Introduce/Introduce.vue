<template>
  <div>
    <!-- 教室轮播图 -->
    <SlideShow :ImgList="list" />
    <!-- 红谷荣誉 -->
    <TitleBox
      :left_title="this.nav.level2.name"
      :right_title1="this.nav.level2.englishName1 "
      :right_title2="this.nav.level2.englishName2"
    />
    <div class="school-honor">
      <div class="img-container">
        <div class="img" v-for="(p,index) in this.nav.level2.data" :key="index">
          <img :src="p.image" alt="" />
          <p>{{p.title}}</p>
        </div>
        </div>
    </div>
    <!-- 教育简介 -->
    <TitleBox
      :left_title="this.nav.level3.name"
      :right_title1="this.nav.level3.englishName1"
      :right_title2="this.nav.level3.englishName2"
    />

    <div class="school-introduce">
      <div class="school-introduce-container">
        <div class="school-img">
          <div class="back-color"></div>
          <img :src="this.nav.level3.data[0].image" alt="" />
        </div>

        <div class="introduce-text">
          <ul class="">
            <li v-for="(p,index) in this.nav.level3.data[0].subItem" :key="index">
              <span>
                {{p.content}}
              </span>
            </li>
           </ul>
        </div>
      </div>
    </div>
    <!-- 校园文化 -->
    <TitleBox
      :left_title="this.nav.level4.name"
      :right_title1="this.nav.level4.englishName1"
      :right_title2="this.nav.level4.englishName2"
    />
    <div class="school-culture">
      <div class="culture-left">
        <div class="left-text">
          <p>HONGU</p>
          <p>EDUCATION</p>
          <p>GROUP 红谷教育集团</p>
          <img :src="this.nav.level4.data[0].image" alt="" />
        </div>
      </div>
      <div class="culture-right">
        <ul>
          <li v-for="(p,index) in this.nav.level4.data[0].subItem" :key="index">
            <span class="title-content">{{p.title}} </span>
            {{p.content}}
          </li>
        </ul>
        <!-- 红谷logo直接在state里面去拿 -->
        <img :src="this.$store.state.content.logo3[0].fieldValue" alt="" />
      </div>
    </div>
    <!-- <TitleBox />
    <router-view></router-view> -->
  </div>
</template>

<script>
import { NavContent } from "../../api";
import {mapState} from 'vuex'
import TitleBox from "../../components/TitleBox/TitleBox.vue";
// 引入轮播图组件
import SlideShow from "../../components/SlideShow/SlideShow.vue";
export default {
  name: "Introduce",
  data() {
    return {
      list: [],
      nav: "",
      Id:localStorage.getItem('navId'),

    };
  },
  mounted() {
  },
   computed:{
    ...mapState(['NavContent'])
  },
  components: {
    TitleBox,
    SlideShow,
  },
  watch: {
    NavContent(newValue){
      console.log(newValue)
      this.nav=newValue 
     this.list = this.nav.level1.data;
    }
  },
};
</script >

<style scoped>
/* 设置学校荣誉样式*/
.school-honor {
  display: flex;
  justify-content: center;
}
.school-honor .img-container {
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-around;
}
.img-container {
  /*多余部分裁剪*/

  display: flex;
}
.img-container img {
  height: 90%;
  padding: 0px;
  width: 100%;
}
.img-container .img p {
  text-align: center;
}
/* 设置教育简介*/
.school-introduce {
  height: 450px;
  width: auto;
}
.school-introduce-container {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
}
.school-introduce-container .school-img {
  width: 100%;

  position: relative;
}
.school-introduce-container img {
  width: 95%;
  height: 95%;
  position: absolute;
  right: 0;
  bottom: 0;
}
.school-introduce-container .back-color {
  width: 95%;
  height: 95%;
  background: red;
  position: absolute;
  left: 0;
  top: 0;
}
.school-introduce-container .introduce-text {
  display: flex;
  align-items: center;
}
.school-introduce-container .introduce-text ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.school-introduce-container .introduce-text li {
  width: 72%;

  margin: 1vmax;
}
.school-introduce-container .introduce-text li::before {
  content: "";
  display: inline-block;
  height: 7.5px;
  width: 7.5px;
  margin-left: -7.5px;
  background-color: #f93535;
}
.school-introduce-container .introduce-text span {
  font-size: 18px;
}
/*设置校园文化 */
.school-culture {
  width: 100%;
  height: 300px;

  display: flex;
}
.school-culture .culture-left {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.school-culture .left-text {
  width: auto;
  height: 40%;

  position: relative;
}
.school-culture .left-text img {
  position: absolute;
  right: 0;
  top: 0;
  width: 20%;
}
.school-culture .left-text p {
  font-size: 2vw;
  color: #c00000;
  line-height: 3vw;
}
.school-culture .culture-right {
  width: 60%;

  display: flex;
  align-items: center;
  position: relative;
}
.school-culture .culture-right ul {
  width: 100%;
  background: #f93535;
}
.school-culture .culture-right li {
  font-size: 18px;
  color: white;
  margin: 20px;
}
.school-culture .culture-right span {
  font-size: 20px;
  padding: 3px;
  padding-left: 6px;
  border: 1px solid;
  border-radius: 18px;
  background: white;
  color: #f93535;
  margin-right: 10px;
}
.culture-right img {
  width: 15%;
  position: absolute;
  top: 8%;
  right: -2%;
}
</style>