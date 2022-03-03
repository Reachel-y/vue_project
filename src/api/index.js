import request from './request'
// 获取站点信息
 export const BASIC_INFO=()=>request.get('/webApi/getInfo')
// 获取导航栏
export const NAV=()=>request.get('/webApi/getNav')
const i=9
// 获取导航广告位内容
export const NavContent=(i)=>request.get('/webApi/getNavContent',{
    params:{
        navId:i,
      },

})
// 获取广告位列表

// 获取广告位列表
export const getAdvertList=()=>request.get('/webApi/getAdvertList')
// 获取新闻列表

// 获取新闻详情
export const getNewsDetails1=()=>request.get('/webApi/newsDetails?newId=9')
export const getNewsDetails2=()=>request.get('/webApi/newsDetails?newId=8')
