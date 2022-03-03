// vuex的核心管理对象store
import Vue from 'vue'
import Vuex from 'vuex'
// import "babel-polyfill"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: '',
    nav:'',
    NavContent:'',
    getAdvertList:'',
    getNewsDetails1:'',
    getNewsDetails2:'',
    info: {
      logo1: [],
      logo2: [],
      logo3: [],
      logo4: [],
      logo5: [],
      introLogo:[],
      zsQrcode:[]
    },
    isNoCollpase: false
  },
  mutations: {
    SET_DATA(state, data) {
      //  console.log('mutations中的SET_DATA被调用了',data)
      
      state.content = data
    },
    SET_INFO(state, data) {
      state.info = data
    },
    SET_COLLPASE(state, data) {
      state.isNoCollpase = data
    },
    // 导航栏数据
    SET_NAV(state,data){
      state.nav=data
      // console.log('mutations中的SET_NAV被调用了',data)
    },
    // 以下是导航栏中得到每一项数据并放进state
    SET_NavContent(state,data){
      state.NavContent=data
      // console.log('mutations中的SET_NavContent_Index被调用了',data)
    },
    
    SET_getAdvertList(state,data){
      state.getAdvertList=data
      // console.log('mutations中的SET_getAdvertList被调用了',data)
    },
    SET_getNewsDetails1(state,data){
      state.SET_getNewsDetails1=data
      // console.log('mutations中的SET_getNewsDetails1被调用了',data)
    },
    SET_getNewsDetails2(state,data){
      state.SET_getNewsDetails2=data
      // console.log('mutations中的SET_getNewsDetails2被调用了',data)
    }
  },
  actions: {},
  modules: {}
})
