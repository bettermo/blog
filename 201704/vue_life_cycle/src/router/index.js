import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Lifecycle from '@/components/lifecycle'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/lifecycle',
    	name: 'Lifecycle',
    	component: Lifecycle
    },
    {
    	path: '/test',
    	name: 'Test',
    	component: Test
    }
  ]
})
