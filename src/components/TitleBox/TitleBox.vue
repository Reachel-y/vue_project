<template>
      <div class="title-box">
      <div class="title">
        <span>{{left_title}}</span>
        <div>
          <P>{{right_title1}}</P>
          <p>{{right_title2}}</p>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      // left_title:'',
      // right_title1:'',
      // right_title2:'',
    }
  },
  props:{
			left_title:{
				type:String, //name的类型是字符串
				// required:true, //name是必要的
			},
			right_title1:{
				type:String,
			},
			right_title2:{
				type:String,
				// required:true
			}
		}
}
</script>

<style scoped>
/* 设置文本标题 */
.title-box {
  display: flex;
  height: 100px;
  margin-bottom: 50px;
  /* border: 1px solid black; */
  
}
.title-box .title {
  position: relative;

  /* background-color:yellow ; */
  width:auto; 
  display:inline-block !important; 
  display:inline;
  margin: 0 auto;
  margin-top:50px;
    /* border: 1px solid black; */

}
.title-box span {
  font-size: 22px;
  margin: 5px;
  
  /* font-weight: 700; */
}
.title::before {
  content: "";
  display: inline-block;
  height: 60px;
  width: 1px;
  background-color: #f93535;
  transform: rotate(60deg);
  position: absolute;
  left: -10%;
  top: -40%;
}
.title::after {
  content: "";
  display: inline-block;
  height: 60px;
  width: 1px;
  background-color: #f93535;
  transform: rotate(60deg);
  position: absolute;
  right: -10%;
  top: -10%;
}
.title div {
  font-size: 15px;
  float: right;
  color: #303133;
}
</style>