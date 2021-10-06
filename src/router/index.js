import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'chat',
    // route level code-splitting
    // this generates a separate chunk (chat.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "chat" */ '../views/chat.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
