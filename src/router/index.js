import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/analysis'
  },
  {
    path: '/analysis',
    component: home,
    children: [
      {
        path: '/analysis',
        component: () => import('@/views/analysis/analysis.vue'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/system',
    component: home,
    redirect: '/system/userList',
    meta: {
      title: '系统管理',
      children: [
        { path: '/system/userList', title: '用户列表' },
        { path: '/system/roleList', title: '角色列表' },
        { path: '/system/rightList', title: '权限列表' }
      ]
    },
    children: [
      {
        path: '/system/userList',
        component: () => import('@/views/system/userList/userList.vue'),
        meta: { title: '用户列表' }
      },
      {
        path: '/system/roleList',
        component: () => import('@/views/system/roleList/roleList.vue'),
        meta: { title: '角色列表' }
      },
      {
        path: '/system/rightList',
        component: () => import('@/views/system/rightList/rightList.vue'),
        meta: { title: '权限列表' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  }
]

// 解决重复触发了同一个路由(控制台报错, 影响不大, 但加上控制台就不报错了)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
