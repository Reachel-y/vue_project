<template>
  <div>
    <!-- 轮播图 -->
        <SlideShow :ImgList="list"/>
    <!-- 红谷新闻 -->
     <TitleBox
     :left_title="this.nav.level2.name"
      :right_title1="this.nav.level2.englishName1"
      :right_title2="this.nav.level2.englishName2"
    />
    <!-- 新闻内容 -->
    <div class="news">
      <div class="news-container">
        <div class="news-item" v-for="(p,index) in this.detail" :key="index">
          <div class="item-container">
            <div class="news-img">
              <div class="news-img-background"></div>
              <img :src="p.cover" alt="" />
            </div>
            <div class="news-content"> 
              <p class="news-date">{{p.issueTime}}</p>
              <div class="text-container">
              <div class="news-title">
                <p>{{p.title}}</p>
              </div>           
              <p class="news-text">
             {{p.describes}}
              </p>
              </div>
              
              <a href="#" class="check-it">查看详情></a>
            </div>
          </div>
        </div>
        <!-- <div class="news-item">
          <div class="item-container">
            <div class="news-img">
              <div class="news-img-background"></div>
              <img src="./img/news-2.jpg" alt="" />
            </div>
            <div class="news-content"> 
              <p class="news-date">2021-05-11</p>
              <div class="text-container">
                 <div class="news-title">
                <p>红谷教育首场招生联谊会活动圆满成功</p>
              </div>
             
              <p class="news-text">
                为进一步提高我校生源质量，推动精准对接重点生源招生宣传工作的开展，加强与优秀生源学校机构的紧密联系合作，以“携手合作·共创美好未来”为主题的红谷教育首场招生联谊会活动在学校多媒体报告厅隆重举行。
              </p>
              </div>
             
              <a href="#" class="check-it">查看详情></a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { NavContent,getNewsDetails1,getNewsDetails2 } from "../../api";
import SlideShow from "../../components/SlideShow/SlideShow.vue";
import TitleBox from "../../components/TitleBox/TitleBox.vue";
export default {
  name: "News",
  data() {
    return {
      list: [],
      nav: "",
      detail:[],
     Id: localStorage.getItem("navId"),

    };
  },
  mounted() {
    //创建swiper对象实现轮播
    
    NavContent(this.Id)
      .then((r) => {
        this.$store.commit("SET_NavContent", r.data);
        // 存储路径数据
        this.nav = r.data;
        // console.log(this.nav);
        // 定义图片路径数组
        this.list = r.data.level1.data;
        // console.log(this.list)
      })
      .catch(function (error) {
        console.log(error);
      });
      getNewsDetails1()
      .then((r) => {
        this.$store.commit("SET_getNewsDetails1", r.data);
        // 存储路径数据
             this.detail.push(r.data)
        console.log(this.detail)
      })
      .catch(function (error) {
        console.log(error);
      });
      getNewsDetails2()
      .then((r) => {
        this.$store.commit("SET_getNewsDetails2", r.data);
     
       this.detail.push(r.data) 
        console.log(this.detail)
      })
      .catch(function (error) {
        console.log(error);
        
      });
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
/* 新闻样式 */
 .news  {
  height: 50vw;
  /* border: 1px solid blue; */
}
 .news-container {
  height: 90%;
  width: 90%;
  margin-left: 5%;
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
}
.news-container   .news-item {
  /* border: 1px solid orange; */
  flex: 1;
}
.news-item  .item-container{
  width: 90%;
  height: 90%;
  margin: 0 auto;
  border-bottom: 1px solid gray; 
  display: flex;

}
.news-item .item-container .news-img {
  width: 60%;
 /* border: 1px solid; */
 position: relative;
}
.news-item .item-container .news-img .news-img-background {
  width: 80%;
  height: 80%;
  background: #c00000;
}
.news-item .item-container img {
  position: absolute;
  width: 80%;
  bottom: 10%;
  right: 10%;
}
.news-item .item-container .news-content {
  width: 100%;
  position: relative;
}
.news-item .item-container .news-content .text-container{
width: 85%;
}
.item-container .news-content .news-title{
  margin-top: 5%;
  margin-bottom:2% ;
}
.item-container .news-content .news-title p{
    font-size:24px;
    color: #303133;
}
.item-container .news-content .news-title::after{
  border: 1px solid;
  content: '';
  display: inline-block;
  width: 10px;
  height: 1px;
  background: #000000;
}
.item-container .news-content .news-date{
position: absolute;
right: 0;
top: 0;
font-size: 18px;
color: #303133;
}
.item-container .news-content .news-text{
  font-size :18px; 
  color: #303133;
  line-height: 30px;
}
.item-container .news-content .check-it{
  position: absolute;
  right: 10%;
  bottom: 10%;
  color: #909099;
  font-size: 14px;
}
</style>