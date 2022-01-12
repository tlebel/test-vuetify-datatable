import Vue from 'vue'
import VueRouter from 'vue-router'

import DataTableNonReactive from '../components/DataTableNonReactive';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Non Reactive',
    component: DataTableNonReactive
  },
  {
    path: '/Reactive',
    name: 'Reactive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/DataTableReactive')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
