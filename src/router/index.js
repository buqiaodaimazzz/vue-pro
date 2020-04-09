import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from "@/views/Films"
import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import Info from "@/views/Info"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/films',
    component: Films
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path:"/login",
    component:() => import("@/views/Login")
  },
  {
    path: '/info',
    component: Info
  },
  {
    path:"/login",
    component:() => import("@/views/Login")
  }
]

const router = new VueRouter({
  mode:"hash", // 默认采用hash模式
  routes
})


router.beforeEach((to, from, next) => {
  if (to.path === "/center") {
    if (localStorage.getItem("token")) { // 说明用户已经登录了
      next()
    } else {
      next("/login") // 如果用户没有登录直接跳转到登录界面进行用户登录
    }
  } else {
    next()
  }
})
export default router
