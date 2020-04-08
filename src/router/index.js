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
    path: '/info',
    component: Info
  },
]

const router = new VueRouter({
  routes
})

export default router
