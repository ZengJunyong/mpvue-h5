import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import room from '@/components/room'
import test from '@/pages/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/room',
      name: 'room',
      component: room
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
