<template>
<div>
  <!-- 轮播图 -->
  <SlideShow :ImgList="list"/>
    <!-- 红谷教育平台 -->
    <TitleBox
     :left_title="this.nav.level2.name"
      :right_title1="this.nav.level2.englishName1"
      :right_title2="this.nav.level2.englishName2"
    />
     <!-- 设施环境 -->
    <div class="school-environment">
      <div class="school-left">
        <div class="school-item-left">
          <!-- 左边分为两部分 -->
          <div class="item-left1">
            <div class="img">
              <img :src="this.nav.level2.data[0].image" alt="" />
              <span>{{this.nav.level2.data[0].title}}</span>
            </div>
            <div class="learn-more">
              <div>
                <h3>MORE</h3>
                <span> 查看更多 </span>
              </div>
            </div>
          </div>
          <div class="item-left2">
            <div class="img" v-for="(item,index) in this.nav.level2.data.slice(1,4)" :key='index'>
              <img :src="item.image" alt="" />
              <span>{{item.title}}</span>
            </div>
           </div>
        </div>
      </div>

      <div class="school-right">
        <div class="school-item-right">
          <div class="item-right1">
            <img :src="this.nav.level2.data[6].image" alt="" />
            <div>
              <h1>{{this.nav.level2.data[6].title}}</h1>
              <p>{{this.nav.level2.data[6].subtitle}}</p>
              <p>{{this.nav.level2.data[6].content}}</p>
            </div>
          </div>

          <div class="item-right2">
            <div class="img1">
              <img :src="this.nav.level2.data[4].image" alt="" />
              <span>{{this.nav.level2.data[4].title}}</span>
            </div>
            <div class="img2">
              <img :src="this.nav.level2.data[5].image" alt="" />
              <span>{{this.nav.level2.data[5].title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="edu-background">

    </div>
</div> 
</template>

<script>
import {mapState} from 'vuex'
import TitleBox from "../../components/TitleBox/TitleBox.vue";
// 引入轮播图组件
import SlideShow from "../../components/SlideShow/SlideShow.vue";
import { NavContent} from "../../api";

export default {
 name:'Student',
  data() {
    return {
      list: [],
      nav: "",
      Id:localStorage.getItem('navId'),
    };
  },
   mounted() {
    //创建swiper对象实现轮
  },
   computed:{
    ...mapState(['NavContent'])
  },
  watch: {
    NavContent(newValue){
      console.log(newValue)
      this.nav=newValue 
     this.list = this.nav.level1.data;
    }
  },
 components: {
    TitleBox,
    SlideShow
  },
}
</script>

<style scoped>
.edu-background{
  height: 100px;
}
/*学校环境格式 */
.school-environment {
  width: 80%;
  height: 388px;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  align-content: center;
}
.school-left {
  border: 1px solid;
  width: 60%;
  background: #f93535;
  position: relative;
}
.school-right {
  width: 40%;
}
.school-item-left {
  width: 50%;
  height: 80%;
  position: absolute;
  right: 0;
  bottom: 10%;
  border: 1px solid;
  display: flex;
}
.school-item-left .item-left1 {
  width: 50%;
  height: 100%;
  overflow: hidden;
  background: #f93535;
}
.school-item-left .item-left2 {
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
.item-left1 {
  border: 1px solid white;
}
.item-left2 div {
  flex: 1;
  position: relative;
  overflow: hidden;
  border: 1px solid white;
}
.item-left2 img {
  height: 100%;
  width: 100%;
}

.item-left2 span {
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
}
.item-left1 .img {
  position: relative;
  overflow: hidden;
}
.item-left1 .img img {
  height: 200px;
  margin-left: -40%;
}

.img span {
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
}
.learn-more {
  border: solid1 px white;
}
.learn-more div {
  width: auto;
  display: inline-block !important;
  display: inline;
  color: white;
  margin-left: 20px;
  margin-top: 20px;
  line-height: 25px;
}
/*右边样式*/
.school-item-right {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.school-item-right .item-right2 {
  width: 90%;
  border: 1px white solid;
  display: flex;
}
.school-item-right .item-right1 {
  margin-top: -5%;
  width: 80%;
  height: 45%;
  position: relative;
}
.item-right1 div {
  position: absolute;
  top: 20%;
  left: 10%;
  line-height: 30px;
}
.item-right1 h1 {
  font-size: 18px;
  margin-bottom: 10%;
}
.item-right1 h1::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 3px;
  background: #303133;
  position: absolute;
  left: 0%;
  top: 30%;
}
.item-right2 .img1 {
  position: relative;
  overflow: hidden;
  border: 1px solid white;
  width: 50%;
}
.item-right2 .img1 span {
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
}
.item-right2 .img2 {
  position: relative;
  overflow: hidden;
  border: 1px solid white;
  width: 100%;
}
.item-right2 .img2 span {
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
}
.item-right2 img {
  height: 100%;
  width: 100%;
}
.item-right1 img {
  position: absolute;
  bottom: 0;
}
</style>