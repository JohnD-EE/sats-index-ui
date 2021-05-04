import Vue from 'vue'
import Home from '../views/Home.vue'
import Fiat from '../views/Fiat.vue'
import OrangePill from '../views/OrangePill.vue'
import Money101 from '../views/Money101.vue'
import Catechism from '../views/Catechism.vue'
import Satoshi from '../views/Satoshi.vue'
import Blog from '../views/Blog.vue'
import Offer from '../views/Offer.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/fiat',
        name: 'Fiat',
        component: Fiat
    },
    {
        path: '/orange-pill',
        name: 'OrangePill',
        component: OrangePill
    },
    {
        path: '/money-101',
        name: 'Money101',
        component: Money101
    },
    {
        path: '/catechism',
        name: 'Catechism',
        component: Catechism
    },
    {
        path: '/satoshi',
        name: 'Satoshi',
        component: Satoshi
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/offer',
        name: 'Offer',
        component: Offer
    }             
]

const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router