<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> {{ companyName }}</a>

    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { store } from './../store.js'

export default {
  data () {
    return {
      companyName: store.current_user.name
    }
  }
}
</script>

