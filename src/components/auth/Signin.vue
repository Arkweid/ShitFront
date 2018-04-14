<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>

      <div class="col-md-4">
        <b-form @submit="onSubmit">

          <b-form-group id="emailInputGroup"
                        label="Email:"
                        label-for="emailInput">
            <b-form-input id="emailInput"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="passInputGroup"
                        label="Password:"
                        label-for="passInput">
            <b-form-input id="passInput"
                          type="text"
                          v-model="form.password"
                          aria-describedby="passInput passInputFeedback"
                          required
                          placeholder="password">
            </b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
        
        <br>
        <p>Еще нет аккаунта?</p>
        <router-link to="/signup">Зарегистрироваться</router-link>
      </div>

      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  name: 'signin',
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit: function() {
      this.$http.post("http://localhost:3000/sessions", {
        email: this.form.email,
        password: this.form.password,
      }).then(function(data){
        if(data.status == 201) {
          store.current_user = JSON.parse(data.bodyText)
          console.log(store.current_user)
          this.$router.push('dashboard');
        } else {
          // show flash errros
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
