<template>
  <div>
    <header-navbar></header-navbar>
    <div class="container-fluid">
      <div class="row">
        <left-navbar></left-navbar>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">Тарифы</h1>
                <div class="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Название</th>
                  <th scope="col">Цена</th>
                  <th scope="col">Траффик, Гб</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tariff in tariffs" :key="tariff.id">
                  <td>{{ tariff.name }}</td>
                  <td>{{ tariff.tax }}</td>
                  <td>{{ tariff.traffic_limit }}</td>
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
      tariffs: store.tariffs
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
      this.$http.get("http://localhost:3000/tariffs", { params: { token: store.current_user.authentication_token }
      }).then(function(data){
        if(data.status == 200) {
          store.tariffs = JSON.parse(data.bodyText)
        } else {
          // show flash errros
        }
      });
    }
  }  
}
</script>

