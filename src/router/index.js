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
    component: Createmahasiswas
  },
  {
    path: '/editmahasiswas/:id',
    name: 'Editmahasiswa',
    component: Editmahasiswas
  },
  {
    path: '/matakuliahs',
    name: 'Index',
    component: Index
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliah',
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs',
    name: 'Editmatakuliah',
    component: Editmatakuliahs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router