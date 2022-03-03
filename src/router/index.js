/* 路由器声明组件*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import MainPage from '../pages/MainPage/MainPage.vue'

import Introduce from '../pages/Introduce/Introduce.vue'
import News from '../pages/News/News.vue'
import Information from '../pages/Information/Information.vue'
import Students from '../pages/Students/Students.vue'
import Teachers from '../pages/Teachers/Teachers.vue'
import layout from '../layout/index.vue'
Vue.use(VueRouter)
export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/',
            component: layout,
            redirect: '/index',
            children: [
                {
                    path:'/index',
                    component:MainPage,
                },
                {
                    path: '/school/general',
                    component: Introduce
                },
                {
                    path: '/school/news',
                    component: News
                },
                {
                    path: '/school/enroll',
                    component: Information
                },
                {
                    path: '/school/world',
                    component: Students
                },
                {
                    path: '/school/teachers',
                    component: Teachers
                },
            ]
        }
    ]
})