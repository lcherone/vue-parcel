import Vue from 'vue'
import Router from 'vue-router'

import PageIndex from './pages/index.vue'
import PageTest from './pages/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex
    },
    {
      path: '/test/:id',
      name: 'test',
      component: PageTest,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})