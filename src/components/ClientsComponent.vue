<template>
  <div>
    <header-navbar></header-navbar>
    <div class="container-fluid">
      <div class="row">
        <left-navbar></left-navbar>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">Клиенты</h1>
                <div class="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Емейл</th>
                  <th scope="col">Номер контракта</th>
                  <th scope="col">Оплачено?</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in clients" :key="client.id">
                  <td>{{ client.email }}</td>
                  <td>{{ client.contract_number }}</td>
                  <td>{{ client.payed ? 'Да' : 'Нет' }}</td>
                </tr>
              </tbody>
            </table>
          </main>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavbar  from './HeaderNavbar.vue'
import LeftNavbar  from './LeftNavbar.vue'
import { store } from './../store.js'

export default {
  data () {
    return {
      clients: store.clients
    }
  },
  components: {
    HeaderNavbar, LeftNavbar
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      this.$http.get("http://localhost:3000/clients", { params: { token: store.current_user.authentication_token }
      }).then(function(data){
        if(data.status == 200) {
          this.clients = JSON.parse(data.bodyText)
        } else {
          // show flash errros
        }
      });
    }
  }
}
</script>

