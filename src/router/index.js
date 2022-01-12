import Vue from 'vue'
import VueRouter from 'vue-router'

import DataTableNonReactive from '../components/DataTableNonReactive';
import NonReactive2 from '../views/NonReactive2';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Non Reactive',
    component: DataTableNonReactive
  },
  {
    path: '/2',
    name: 'Non Reactive 2',
    component: NonReactive2
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
