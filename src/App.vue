<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNavbar  from './components/HeaderNavbar.vue'
import LeftNavbar  from './components/LeftNavbar.vue'

import { store } from './store.js'

export default {
  data () {
    return {
      user: function() { store.current_user }
    }
  },
  components: {
    HeaderNavbar, LeftNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
