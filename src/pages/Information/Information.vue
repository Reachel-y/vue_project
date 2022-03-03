<template>
  <div>
    <!-- 轮播图 -->
    <SlideShow :ImgList="list"/>
    <!-- 招生理念 -->
    <TitleBox
      :left_title="this.nav.level2.name"
      :right_title1="this.nav.level2.englishName1"
      :right_title2="this.nav.level2.englishName2"
    />
    <div class="course">
      <div class="course-container">
        <div class="course_box">
          <div class="course-item"  v-for="(p, index) in this.nav.level2.data"
          :key="index">
            <div class="course-img">
              <img :src="p.image" alt="" />
            </div>
            <div class="course-content">
              <h3>{{p.title}}</h3>

              <p >{{p.subItem[0].title}} <br />{{p.subItem[1].title}}</p>
            </div>
            <div class="course-tag"></div>
          </div>
         </div>
      </div>
    </div>
    <!-- 招生简介 -->
    <TitleBox
      :left_title="this.nav.level3.name"
      :right_title1="this.nav.level3.englishName1"
      :right_title2="this.nav.level3.englishName2"
    />
    <div class="admission-profile">
      <div class="background-img">
        <img src="http://www.honguedu.com/home/img/bgimg.e5d49167.png" alt="" />
      </div>
      <div class="profile-text">
        <ul>
          <li v-for="(p, index) in this.nav.level3.data[0].subItem" :key="index"><span>{{p.title}}:</span>{{p.content}}</li>
        </ul>
        <div class="student-img">
          <img :src="this.nav.level3.data[0].image" alt="" />
        </div>
        <div class="code-img">
          <img :src="this.$store.state.content.qrcode[0].fieldValue" alt="" /><br>
          <a href="#">招生二维码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavContent } from "../../api";
import {mapState} from 'vuex'
import TitleBox from "../../components/TitleBox/TitleBox.vue";
// 引入轮播图组件
import SlideShow from "../../components/SlideShow/SlideShow.vue";
export default {
  name: "Information",
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
};
</script>

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
/* 招生信息样式 */
.admission-profile {
  height: 500px;

  position: relative;
}
.admission-profile .background-img {
  position: absolute;
  margin-top: 0px;
  height: 60%;
  width: 100%;
  z-index: -1;
  top: 10%;
}
.admission-profile .background-img img {
  width: 100%;
}
.admission-profile .profile-text {
  height: 90%;

  width: 50%;
  margin: 0 auto;
  /* margin-top:-50px ; */
  background: white;
  border: 1px gray solid;
  box-shadow: 0px 0px 10px gray;
  border-radius: 20px;
  position: relative;
}
.admission-profile .profile-text ul {
  /* border: 1px solid; */
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5%;
}
.admission-profile .profile-text li {
  font-size: 18px;
  line-height: 38px;
  color: #303133;
}
.admission-profile .profile-text li::before {
  content: "";
  display: inline-block;
  height: 7.5px;
  width: 7.5px;
  margin-left: -7.5px;
  background-color: #c00000;
}
.admission-profile .profile-text span {
  font-size: 18px;
  color: #303133;
  margin: 0 10px;
}
.admission-profile .profile-text .student-img{
position: absolute;
left: -20%;
bottom: 16%;
}
.admission-profile .profile-text .student-img img{
  width: 25%;
}
.admission-profile .profile-text .code-img{
width: 20%;
position: absolute;
right: 10%;
bottom: 0;
}
.admission-profile .profile-text .code-img img{
width: 100%;
}
.admission-profile .profile-text .code-img a{
  color: #f93535;
  padding-left: 20%;
}
</style>