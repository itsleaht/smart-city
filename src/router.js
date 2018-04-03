import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Sources from './views/Sources.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/sources',
      name: 'sources',
      component: Sources,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
