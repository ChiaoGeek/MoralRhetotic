import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index/index'
import deeplyIndex from '../view/deeply/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/deeply',
      name: 'deeplyIndex',
      component: deeplyIndex
    }
  ]
})
