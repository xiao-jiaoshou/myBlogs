import Vue from "vue"
import VueRouter from "vue-router"

import Index from '../views/Index'
// 调用Vue.use()，把VueRouter安装为Vue的插件
Vue.use(VueRouter)

// 创建路由实例
const router = new VueRouter({
    routes : [
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})

// 向外暴露路由
export default router
