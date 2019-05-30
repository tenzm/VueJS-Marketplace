<template>
<div class = "coverdiv">
  <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Авторизация</h1>
      </v-layout>
    </v-parallax>
  <div class = "logdiv">
    <span style="font-size: 18px; font-style: italic; padding-left: 10px;" >Имя пользователя:</span>
    <v-flex xs12 style="margin-top: 10px;">
      <v-text-field
        v-model="username"
        type="text"
        label="Укажите имя пользователя"
        solo-inverted
      ></v-text-field>
    </v-flex>
    <span style="font-size: 18px; font-style: italic; padding-left: 10px; " >Пароль:</span>
    <v-flex xs12 style="margin-top: 10px;">
      <v-text-field
        v-model="password"
        type="password"
        label="Укажите пароль"
        solo-inverted
      ></v-text-field>
    </v-flex>
    <v-btn color="primary" depressed style="width:120px;" @click="login({username, password})" dark>Войти</v-btn>
    <router-link to = "/registration" depressed style = "font-size: 16px; color: black; margin-left: 20px;">Регистрация</router-link>
  </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    ...mapActions(["login"])
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