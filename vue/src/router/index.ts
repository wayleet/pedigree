import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import AboutPage from '../components/pages/About.vue'
import AboutIdPage from '../components/pages/AboutId.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/about/:id',
    name: RouteNames.ABOUT_ID,
    component: AboutIdPage
  },
  {
    path: '/about',
    name: RouteNames.ABOUT,
    component: AboutPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
