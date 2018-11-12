import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/tableau-de-bord',
      name: 'home',
      component: () =>
        import('./views/Home/Home.vue')
    },
    {
      path: '/retraitants',
      name: 'retraitants',
      component: () =>
        import('./views/Retraitants/Retraitants.vue')
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: () =>
        import('./views/Reservations/Historique/HistoriqueReservations.vue')
    },
    {
      path: '/nouvelle-reservation',
      name: 'nouvelle-reservation',
      component: () =>
        import('./views/Reservations/New/NewReservation.vue')
    },
    {
      path: '/reglements',
      name: 'reglements',
      component: () =>
        import('./views/Reglements/Reglements.vue')
    },
    {
      path: '/espaces',
      name: 'espaces',
      component: () =>
        import('./views/Espaces/Espaces.vue')
    },
    {
      path: '/employes',
      name: 'employes',
      component: () =>
        import('./views/Employes/Employes.vue')
    },
    {
      path: '/parametres',
      name: 'parametres',
      component: () =>
        import('./views/Parametres/Parametres.vue')
    },
    {
      path: '/*',
      name: 'notFound',
      component: () =>
        import('./views/404/notFound.vue')
    },
  ]
})