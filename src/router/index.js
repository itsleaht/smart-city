import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Info from '@/views/Info'
import Sources from '@/views/Sources'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/smartCity/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/smartCities',
      name: 'info',
      component: Info
    },
    {
      path: '/sources',
      name: 'sources',
      component: Sources
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
