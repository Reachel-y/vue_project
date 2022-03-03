<template>
  <div>
    <!-- 轮播图 -->
    <SlideShow :ImgList="list"/>
    <!-- 教师简介 -->
    <TitleBox
      :left_title="this.nav.level2.name"
      :right_title1="this.nav.level2.englishName1 "
      :right_title2="this.nav.level2.englishName2"
    />

    <div class="hongu-teacher">
      <div class="hg-teacher-container">
        <div class="teacher-content">
          <div class="teacher-item" v-for="(p,index) in this.nav.level2.data.slice(0,4)" :key="index">
            <div class="inrtoduce-box">
              <div class="teacher-img">
                <img :src="p.image" alt="" />
              </div>
              <div class="teacher-name">
                <h3>{{p.title}}</h3>
                <div class="name-tag">
                  <p>
                    {{p.subtitle}}
               </p>
                </div>
              </div>
              <div class="teacher-introduce">
                <p v-for="(subitem,index) in p.subItem" :key="index">
                  {{subitem.title}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="know-more">
        <a href="">查看更多></a>
      </div>
      <div></div>
    </div>
    <!-- 师资团队 -->
    <TitleBox
      :left_title="this.nav.level3.name"
      :right_title1="this.nav.level3.englishName1 "
      :right_title2="this.nav.level3.englishName2"
    />

    <div class="teacher-text">
      <p>
        {{this.nav.level3.remark}}
      </p>
    </div>
    <!-- 师资队伍 -->
    <div class="teacherTeam">
      <div class="back-ground"></div>
      <div class="teacherTeam-container">
        <img :src="this.nav.level3.data[0].image" alt="" />
        <div class="inner">
          <div class="buttom-left-text">
            <h1>
              HONGU<br />
              EDUCATION<br />
              GROUP
            </h1>
            <p>{{this.nav.level3.data[0].title}}</p>
          </div>
          <div class="buttom-right-text">
            <div>{{this.nav.level3.data[0].subtitle}}</div>
            <div>{{this.nav.level3.data[0].content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { NavContent } from "../../api";
import TitleBox from "../../components/TitleBox/TitleBox.vue";
// 引入轮播图组件
import SlideShow from "../../components/SlideShow/SlideShow.vue";
export default {
  name: "Teachers",
  data() {
    return {
      list: [],
      nav: "",       
      Id: localStorage.getItem("navId"),

    };
  },
   mounted() {
    //创建swiper对象实现轮播
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
</script>

<style >
.hongu-teacher {
  margin-top: 200px;
  width: 100%;
  /* border: 1px solid black; */
  height: 160vh;
}
.hg-teacher-container {
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid black; */
  height: 90%;
}
.hg-teacher-container .teacher-content {
  width: 90%;
  margin: 0 auto;
  /* border: 1px orange solid; */
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.teacher-content .teacher-item {
  width: 50%;
  height: 50%;
  /* border: 1px blue solid; */
  display: flex;
  justify-content: center;
}
.teacher-content .teacher-item .inrtoduce-box {
  width: 40%;
  border: 2px solid #f93535;
  height: 80%;
  position: relative;
}
.inrtoduce-box .teacher-img {
  position: absolute;
  left: -43%;
  top: -15%;
}
.inrtoduce-box .teacher-img img {
  width: 60%;
}
.inrtoduce-box .teacher-name {
  /* border: 1px solid blueviolet; */
  position: absolute;
  width: 30%;
  height: 30%;
  right: 10%;
  top: 10%;
}
.inrtoduce-box .teacher-name h3 {
  writing-mode: vertical-lr;
  font-size: 1.3vw;
  /* border: 1px solid; */
}
.inrtoduce-box .teacher-name .name-tag {
  position: absolute;
  right: 0;
  top: 10px;
}
.inrtoduce-box .teacher-name p {
  transform: rotate(90deg);
  font-size: 12px;
}
.inrtoduce-box .teacher-introduce {
  border-width: 20%;
  width: 80%;
  position: absolute;
  top: 40%;
  left: 10%;
}
.inrtoduce-box .teacher-introduce p::before {
  content: "";
  display: inline-block;
  width: 20%;
  height: 1px;
  background: gray;
  position: absolute;
  top: 0;
  left: 40%;
}
.inrtoduce-box .teacher-introduce p {
  font-size: 1.1vw;
  line-height: 30px;
  text-align: center;
}
.know-more {
  /* border: 1px solid; */
  height: 30px;
  text-align: center;
}
/*师资信息*/
.teacher-text {
  /* border:1px solid ; */
  width: auto;
  margin-bottom: 100px;
  display: inline-block !important;
  display: inline;
  margin-left: 30%;
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
</style>