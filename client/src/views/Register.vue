<template>
  <div>
    <h1 class="font-bold ">Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email" />
    <br>
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <br>
    <div class="error" v-html="error" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService"
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  methods: {
    async register(){
      try{
        await AuthentificationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error){
        this.error = error.response.data.error
      }
    }
  },
  
}
</script>

<style>
.error {
  color: red;
}
</style>
