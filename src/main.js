import Vue from 'vue'
import App from './App.vue'
import store from './store'
//引入路由器
import router from './router'
//引入VueRouter
import VueRouter from 'vue-router'
//声明使用
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  el:'#app',
	render: h => h(App),
	router:router,
	store, // 将 store 实例从根组件中‘注入’到每一个子组件中，子组件通过 `this.$store` 调用
})
