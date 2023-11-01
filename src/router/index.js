import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/User'
import Home from '@/views/Home'
import Manage from '@/views/Manage'
import Login from '@/views/Login'
import Register from '@/views/Register' 
import Person from '@/views/Person'
import File from '@/views/File'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    redirect:  "/manage/home" ,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: "user",
        name: "User",
        component: User
      },
      {
        path: "person",
        name: "Person",
        component: Person
      },
      {
        path: "file",
        name: "File",
        component: File
      },
    
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
