import Vue from 'vue'
import App from './App.vue'
// 引入全局样式
import '@/styles/index.less'

// 1.路由部分准备
// 1.1 全局引入注册路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 1.2 配置路由规则
const routes = [
  //   { path: "/find", component: Find },
  //   { path: "/my", component: My },
  //   { path: "/part", component: Part },
]
// 1.3 用规则生成路由对象
const router = new VueRouter({ routes: routes })




Vue.config.productionTip = false

// 1.4注入路由router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
