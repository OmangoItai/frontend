import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Space from "@/views/Space";
import Register from "@/views/Register";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/space',
    name: 'Space',
    component: Space
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
