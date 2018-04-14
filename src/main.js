import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// custom
import { store } from './store.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

import Signup from './components/auth/Signup.vue'
import Signin from './components/auth/Signin.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import TariffComponent from './components/TariffComponent.vue'
import ClientsComponent from './components/ClientsComponent.vue'

const router = new VueRouter({
  routes: [
    { path: '/signup', component: Signup },
    { path: '/signin', component: Signin },
    { path: '/dashboard', component: DashboardComponent },
    { path: '/tariff', component: TariffComponent },
    { path: '/clients', component: ClientsComponent }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.current_user || (to.path == '/signup') || (to.path == '/signin')) {    
    next()
  } else {
    next({ path: '/signin' })
  }
})

new Vue({
  router,
  render: h => h(App),
  data: {}
}).$mount('#app')
