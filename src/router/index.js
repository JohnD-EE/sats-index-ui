import Vue from 'vue'
import Home from '../views/Home.vue'
import Fiat from '../views/Fiat.vue'
import OrangePill from '../views/OrangePill.vue'
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
    }      
]

const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router