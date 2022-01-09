import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'

import Provedor from '@/provedor'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario,
    meta: {
      requiresAuth: false
    }


  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !Provedor.state.token) {
    return next({path: '/login'})
  }
  next()
})

export default router
