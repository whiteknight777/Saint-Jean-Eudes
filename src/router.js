import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () =>
        import('./views/Home/Home.vue')
    },
    {
      path: '/*',
      name: 'notFound',
      component: () =>
        import('./views/404/notFound.vue')
    },
  ]
})
