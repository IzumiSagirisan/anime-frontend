import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomeView.vue'
import login from '@/views/LoginView.vue'
import user from '@/views/UserCenter.vue'
import manager from '@/views/ManagerView.vue'
import admin from '@/views/AdminView.vue'
import SeasonAnime from '@/views/anime/SeasonAnime.vue'
// todo: 路由守卫没有写

// 创建路由对象 router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/manager',
      name: 'manager',
      component: manager
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/SeasonAnime',
      name: 'SeasonAnime',
      component: SeasonAnime
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
