import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/List.vue'
import detail from '@/views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
