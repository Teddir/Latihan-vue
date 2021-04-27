import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/mahasiswas/Home.vue'
import Createmahasiswas from '../views/mahasiswas/Createmahasiswas.vue'
import Editmahasiswas from '../views/mahasiswas/Editmahasiswas.vue'
import Index from '../views/matakuliahs/Index.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmahasiswas',
    name: 'Createmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswas
  },
  {
    path: '/editmahasiswas/:id',
    name: 'Editmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswas
  },
  {
    path: '/matakuliahs',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs',
    name: 'Editmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router