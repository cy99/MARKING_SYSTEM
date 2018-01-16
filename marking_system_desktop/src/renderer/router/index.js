import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/v0'
    },
    {
      path: '/v0',
      redirect: '/v0/login'
    },
    {
      path: '/v0/login',
      name: 'login',
      component: require('@/pages/Login').default
    },
    {
      path: '/v0/register',
      name: 'register',
      component: require('@/pages/Register').default
    },
    {
      path: '/v0/hall',
      name: 'hall',
      component: require('@/pages/Hall').default
    },
    {
      path: '*',
      component: require('@/pages/Page404').default
    }
  ]
})