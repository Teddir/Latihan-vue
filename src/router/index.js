import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/mahasiswas/Home.vue'
import Createmahasiswas from '../views/mahasiswas/Createmahasiswas.vue'
import Editmahasiswas from '../views/mahasiswas/Editmahasiswas.vue'

import Matakuliah from '../views/matakuliahs/Index.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'

import Absensi from '../views/absensis/Index.vue'
import Createabsensis from '../views/absensis/Createabsensis.vue'
import Editabsensis from '../views/absensis/Editabsensis.vue'

import Jadwal from '../views/jadwals/Index.vue'
import Createjadwals from '../views/jadwals/Createjadwals.vue'
import Editjadwals from '../views/jadwals/Editjadwals.vue'

import Kontrak from '../views/kontraks/Index.vue'
import Createkontraks from '../views/kontraks/Createkontraks.vue'
import Editkontraks from '../views/kontraks/Editkontraks.vue'

import Semester from '../views/semesters/Index.vue'
import Createsemesters from '../views/semesters/Createsemesters.vue'
import Editsemesters from '../views/semesters/Editsemesters.vue'


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
    name: 'Matakuliah',
    component: Matakuliah
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliah',
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliah',
    component: Editmatakuliahs
  },
  {
    path: '/absensis',
    name: 'Absensi',
    component: Absensi
  },
  {
    path: '/createabsensis',
    name: 'Createabsensi',
    component: Createabsensis
  },
  {
    path: '/editabsensis/:id',
    name: 'Editabsensi',
    component: Editabsensis
  },
  {
    path: '/jadwals',
    name: 'Jadwal',
    component: Jadwal
  },
  {
    path: '/createjadwals',
    name: 'Createjadwal',
    component: Createjadwals
  },
  {
    path: '/editjadwals/:id',
    name: 'Editjadwal',
    component: Editjadwals
  },
  {
    path: '/kontraks',
    name: 'Kontrak',
    component: Kontrak
  },
  {
    path: '/createkontraks',
    name: 'Createkontrak',
    component: Createkontraks
  },
  {
    path: '/editkontraks/:id',
    name: 'Editkontrak',
    component: Editkontraks
  },
  {
    path: '/semesters',
    name: 'Semester',
    component: Semester
  },
  {
    path: '/createsemesters',
    name: 'Createsemester',
    component: Createsemesters
  },
  {
    path: '/editsemesters/:id',
    name: 'Editsemester',
    component: Editsemesters
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router