import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home
    },
    {
      path: '/Dashboard',
      name: 'home',
      component: () =>
        import('./views/Home/Home.vue')
    }
  ]
})
