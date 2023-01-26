import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '../views/RestaurantView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/restaurant/:name(\w+)',
      name: 'restaurant-show',
      component: RestaurantView
    },

    {
      path: '/restaurant',
      name: 'restaurant',
    //  On peut égalemnet utiliser ce moyen pour importer le fichier à afficher### fontion flêcher.
      component: () => import('../views/RestaurantView.vue')
    },

  ]
})

export default router
