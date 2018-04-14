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

          <b-form-group id="nameInputGroup"
                        label="Name:"
                        label-for="nameInput">
            <b-form-input id="nameInput"
                          type="text"
                          v-model="form.name"
                          :state="nameState"
                          aria-describedby="nameInput nameInputFeedback"
                          required
                          placeholder="name">
            </b-form-input>
            <b-form-invalid-feedback id="nameInputFeedback">
              Minimum 4 characters
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="passInputGroup"
                        label="Password:"
                        label-for="passInput">
            <b-form-input id="passInput"
                          type="text"
                          v-model="form.password"
                          :state="passState"
                          aria-describedby="passInput passInputFeedback"
                          required
                          placeholder="password">
            </b-form-input>
            <b-form-invalid-feedback id="passInputFeedback">
              Minimum 6 characters
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="passConfInputGroup"
                        label="Password Confirmation:"
                        label-for="passConfInput"
                        description="Password must match with password confirmation field">
            <b-form-input id="passConfInput"
                          type="text"
                          v-model="form.password_confirmation"
                          :state="passConfState"
                          aria-describedby="passConfInput passConfInputFeedback"
                          required
                          placeholder="password confirmation">
            </b-form-input>
            <b-form-invalid-feedback id="passConfInputFeedback">
              Password dont match
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

        <br>
        <p>Уже есть аккаунт?</p>
        <router-link to="/signin">Войти</router-link>
      </div>

      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  name: 'signup',
  computed: {
    nameState () {
      return this.form.name.length >= 4 ? true : false
    },
    passState () {
      return this.form.password.length >= 6 ? true : false
    },
    passConfState () {
      return this.form.password == this.form.password_confirmation ? true : false
    }
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
      },
    }
  },
  methods: {
    onSubmit: function() {
      this.$http.post("http://localhost:3000/users", {
        email: this.form.email,
        name: this.form.name,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
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
