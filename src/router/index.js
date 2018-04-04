import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import List from '@/views/List'
import Sources from '@/views/Sources'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/sources',
      name: 'sources',
      component: Sources
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
