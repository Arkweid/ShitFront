import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Signup from './components/auth/Signup.vue'

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/signup', component: Signup }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
