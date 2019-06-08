<template>
<div class = "coverdiv">
  <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Авторизация</h1>
      </v-layout>
    </v-parallax>
    
  <v-container grid-list-xl style="text-align: center; padding-bottom: 100px;">
    <v-flex style="width: 400px; text-align: left; margin: 0 auto; margin-top:15vh;">
    <span style="font-size: 18px; font-style: italic; padding-left: 10px;" >Имя пользователя:</span>
      <v-text-field
        v-model="username"
        type="text"
        label="Укажите имя пользователя"
        solo-inverted
      ></v-text-field>
    <span style="font-size: 18px; font-style: italic; padding-left: 10px; " >Пароль:</span>
      <v-text-field
        v-model="password"
        type="password"
        label="Укажите пароль"
        solo-inverted
      ></v-text-field>
    <v-alert
      v-model="is_login_error"
      :value="is_login_error"
      type="error"
      color="red"
      style="margin-bottom: 20px;"
    >
      Неверное имя или пароль.
    </v-alert>
    <v-btn color="primary" depressed style="width:120px;" @click="do_login({username, password})" dark>Войти</v-btn>
    <router-link to = "/registration" depressed style = "font-size: 16px; color: black; margin-left: 20px;">Регистрация</router-link>

    </v-flex>
  </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions(["login", "remove_errors"]),
    do_login(data){
      this.login(data)
      this.is_login_error = true;
    }
  },
  beforeMount(){
    this.remove_errors();
  },
  computed: {
    ...mapState({
      is_login_error: state => state.users.errors.login_error,
      })
  }
};
</script>

<style>
.logdiv{
  width: 500px;
  margin: 0 auto;
  padding: 30px 50px;
  border-radius: 25px;
  margin-top: 15vh;
}
</style>