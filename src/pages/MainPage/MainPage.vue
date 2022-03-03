<template>
  <div>
    <!-- 引入轮播图组件 -->
    <SlideShow :ImgList="list" />
    <!-- 课程标题 -->
    <TitleBox
      :left_title="this.nav.level2.name"
      :right_title1="this.nav.level2.englishName1"
      :right_title2="this.nav.level2.englishName2"
    />
    <!-- 课程内容 -->
    <div class="course">
      <div class="course-container">
        <div class="course_box">
          <div
            class="course-item"
            v-for="(p, index) in this.nav.level2.data"
            :key="index"
          >
            <div class="course-img">
              <img :src="p.image" alt="" />
            </div>
            <div class="course-content">
              <h3>{{ p.title }}</h3>

              <p>
                {{ p.content }}
              </p>
            </div>
            <div class="course-tag">
              <span>{{ p.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="white-background"></div>
    <!-- 集团简介 -->
    <div class="group_introduce">
      <div class="left_bottom_text">
        <h1>GROUP</h1>
        <p>INTRODUCE</p>
      </div>
      <div class="right_top_text">
        <h1>{{this.nav.level6.data[0].title}}</h1>
        <p v-for="(p,index) in this.nav.level6.data[0].subItem" :key="index">
          {{p.content}}
          
        </p>
        <div class="hongu-logo">
          <img :src='this.$store.state.content.logo3[0].fieldValue' alt="" />
        </div>
      </div>
    </div>
    <!--  集团学校 -->
    <TitleBox
      :left_title="this.nav.level3.name"
      :right_title1="this.nav.level3.englishName1 "
      :right_title2="this.nav.level3.englishName2"
    />
    <div class="school-of-group">
      <div class="school-items-container">
        <div class="school-item" v-for="(p,index) in this.nav.level3.data" :key="index">
          <img :src="p.image" alt="" />
          <span> {{p.title}} </span>
        </div>
        </div>
    </div>
    <!-- 师资队伍 -->
    <div class="teacherTeam">
      <div class="back-ground"></div>
      <div class="teacherTeam-container">
        <img :src="this.nav.level7.data[0].image" alt="" />
        <div class="inner">
          <div class="buttom-left-text">
            <h1>
              HONGU<br />
              EDUCATION<br />
              GROUP
            </h1>
            <p>{{this.nav.level7.data[0].title}}</p>
          </div>
          <div class="buttom-right-text">
            <div>{{this.nav.level7.data[0].subtitle}}</div>
            <div>{{this.nav.level7.data[0].content}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 校园环境 -->
    <TitleBox
      :left_title="this.nav.level4.name"
      :right_title1="this.nav.level4.englishName1 "
      :right_title2="this.nav.level4.englishName2"
    />
    <!-- 设施环境 -->
    <div class="school-environment">
      <div class="school-left">
        <div class="school-item-left">
          <!-- 左边分为两部分 -->
          <div class="item-left1">
            <div class="img">
              <img :src="this.nav.level4.data[0].image" alt="" />
              <span>{{this.nav.level4.data[0].title}}</span>
            </div>
            <div class="learn-more">
              <div>
                <h3>MORE</h3>
                <span> 查看更多 </span>
              </div>
            </div>
          </div>
          <div class="item-left2">
            <div class="img" v-for="(item,index) in this.nav.level4.data.slice(1,4)" :key='index'>
              <img :src="item.image" alt="" />
              <span>{{item.title}}</span>
            </div>
              </div>
        </div>
      </div>

      <div class="school-right">
        <div class="school-item-right">
          <div class="item-right1">
            <img :src="this.nav.level4.data[10].image" alt="" />
            <div>
              <h1>{{this.nav.level4.data[10].title}}</h1>
              <p>{{this.nav.level4.data[10].subtitle}}</p>
              <p>{{this.nav.level4.data[10].content}}</p>
            </div>
          </div>

          <div class="item-right2">
            <div class="img1">
              <img :src="this.nav.level4.data[4].image" alt="" />
              <span>{{this.nav.level4.data[4].title}}</span>
            </div>
            <div class="img2">
              <img :src="this.nav.level4.data[5].image" alt="" />
              <span>{{this.nav.level4.data[5].title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 教育优势 -->
    <TitleBox
      :left_title="this.nav.level5.name"
      :right_title1="this.nav.level5.englishName1"
      :right_title2="this.nav.level5.englishName2"
    />
    <div class="advantage">
      <img :src="this.nav.level5.data[0].image" alt="" />
      <ul>
        <li v-for="(p,index) in this.nav.level5.data[0].subItem" :key="index">
          <div><span>{{p.title}}</span> {{p.subtitle}}</div>

          <p>{{p.content}}</p>
        </li>
     </ul>
    </div>
  </div>
</template>

<script>
import { NavContent, NAV,NavContent_Intro } from "../../api";
import TitleBox from "../../components/TitleBox/TitleBox.vue";
import SlideShow from "../../components/SlideShow/SlideShow.vue";
import {mapState} from 'vuex'
export default {
  name: "MainPage",
  data() {
    return {
      nav: {},
      list: [],
      Id:Number(localStorage.getItem('navId')),
      
    };
  },
  mounted() {  
    
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
    SlideShow,
  },
};
</script >

<style scoped>


.course_box {
  display: flex;
  justify-content: center;
  height: 500px;
}
.course-item {
  width: 20%;
  padding: 10px;
  background-color: #fff;
  margin: 20px;
  position: relative;
  transition-duration: 0.5s;
}
/*设置鼠标移入时背景阴影 */
.course-item:hover {
  box-shadow: 0px 0px 10px gray;
}
.course-item .course-content {
  display: flex;
  justify-content: center;
  height: 50%;
  position: relative;
  margin-top: 10px;
}

.course-content h3 {
  /* display: inline-block; */
  font-size: 1.5vmax;
  position: absolute;
  top: 0%;

  color: red;
  align-content: center;
}
.course-content h3::after {
  content: "";

  width: 10px;
  height: 3px;
  background: red;
  position: absolute;
  left: 50%;
  bottom: -50%;
}
.course-content p {
  text-align: center;
  margin-top: 10px;
  position: absolute;
  top: 20%;
  font-size: 1rem;
}
/* */
.course-tag {
  display: flex;
  justify-content: center;
}
.course-tag span {
  border: 1px solid #f93535;
  border-radius: 25px;
  padding: 2px;
  color: #f93535;
  /* display: inline-block; */
  position: absolute;
  bottom: 2%;
  text-align: center;
}
.course-img {
  width: 100%;
  height: 200px;
  /*多余部分裁剪*/
  overflow: hidden;
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
}
.course-img img {
  width: 100%;
}
/*分隔背景*/
.white-background {
  height: 200px;
}
/*集团简介 */
.group_introduce {
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url("http://portal.honggu.cn:9000/img/hgEducation/carousel/e3bb3df59e717d760423e9f0d2277c75.jpg");
  /* overflow: hidden; */
  /* background-position: center; */
  background-attachment: fixed;
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  top: 0;
}
.group_introduce img {
  width: 100%;
}
/* 设置左下角介绍 */
.group_introduce .left_bottom_text {
  width: auto;
  display: inline-block !important;
  display: inline;
  position: absolute;
  bottom: 5%;
  left: 10%;
}
.group_introduce .left_bottom_text h1 {
  font-size: 29px;
  color: red;
}
.group_introduce .left_bottom_text p {
  font-size: 29px;
  color: white;
  margin: 10px 0;
}
/*设置右上角介绍 */
.right_top_text {
  position: absolute;
  width: 50%;
  height: 27vw;
  background-color: red;
  top: 0;
  right: 0;
  margin-top: -50px;
}
.right_top_text h1 {
  font-size: 28px;
  color: white;

  margin: 30px;
  margin-left: 10px;
  padding: 0 40px;
}
.right_top_text h1::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 3px;
  background: #fff;
  position: absolute;
  left: 7%;
  bottom: 78%;
  margin-bottom: 10px;
}
.right_top_text p {
  font-size: 18px;
  width: 60%;
  color: white;
  line-height: 30px;
  margin: 20px 0;
  margin-left: 50px;
}
.group_introduce .hongu-logo img {
  width: 30%;
  position: absolute;
  top: -20%;
  right: -5%;
}
/*设置学校样式 */
.school-of-group {
  height: 22vw;
}
.school-of-group .school-items-container {
  width: 80%;
  margin: 0 auto;
  height: 80%;
  display: flex;
  justify-content: space-around;
}
.school-items-container .school-item {
  width: 22%;
  text-align: center;
}
.school-items-container .school-item span {
  color: #303133;
  font-size: 16px;
}
.school-items-container .school-item img {
  width: 100%;
}
/*设置师资团队格式 */

.teacherTeam .teacherTeam-container {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.teacherTeam .back-ground {
  width: 100%;
  height: 70%;
  background-color: #fc9a9a;
  position: absolute;
  margin-top: -50px;
}
.teacherTeam-container img {
  width: 100%;
}
.teacherTeam-container .inner {
  width: 1290;
  height: 90px;
  border: solid red;
  margin-top: -20px;
}
.buttom-left-text h1 {
  position: absolute;
  left: 80px;
  bottom: 20px;
  font-size: 17px;
  color: red;
  line-height: 30px;
}
.buttom-left-text p {
  position: absolute;
  left: 150px;
  bottom: 26px;
  font-size: 17px;
  color: black;
}
.buttom-right-text {
  position: absolute;
  right: 50px;
  bottom: 20px;
  font-size: 17px;
  color: black;
  line-height: 30px;
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
/* 教育优势样式 */
.advantage {
  position: relative;
  width: 80%;
  margin: 0 auto;
  /* //    background-color: black; */
}
.advantage img {
  width: 100%;
}
.advantage ul {
  display: table;
  width: 100%;
  height: 200px;
}
.advantage li {
  /* 设置左浮动 使菜单横向排列*/
  float: left;
  display: table-cell;
  text-align: center;
  width: 20%;
  position: relative;
}
.advantage li::before {
  display: inline-block;
  content: "";
  width: 1px;
  background: gray;
  height: 100px;
  position: absolute;
  right: 0;
}
.advantage li:last-child::before {
  content: "";
  width: 0;
}
.advantage span {
  font-size: 3.31288vw;
  color: #f93535;
}
.advantage div {
  margin-bottom: 30px;
}
.advantage p::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 3px;
  background-color: #f93535;

  position: absolute;
  margin-top: -20px;
  margin-left: 30px;
}
.advantage p {
  color: red;
}
</style>