import Vue from 'vue'
import VueRouter from 'vue-router'
import  userHome from '../views/userHome.vue'
import  adminHome from '../views/adminHome.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import singleBudget from '../views/budgetSingle.vue'
import addBudget from '../views/addbudget.vue'
import allBudgets from '../views/allBudgets.vue'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login

  },
  {
    path: '/',
    name: 'index',
    component: index

  },
  {
    path: '/home',
    name: 'home',
    component: userHome

  },
  {
    path: '/adminHome',
    name: 'adminHome',
    component: adminHome

  },
  {
    path: '/budgetSingle',
    name: 'budgetSingle',
    component: singleBudget

  },
  {
    path: '/add',
    name: 'addbudget',
    component:addBudget

  },
  {
    path: '/all',
    name: 'allbudgets',
    component:allBudgets

  },
  {
    path: '/register',
    name: 'register',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: register 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
