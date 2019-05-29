<template>
<div class = "coverdiv">
  <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Регистрация</h1>
      </v-layout>
    </v-parallax>
  <div class = "logdiv">
    <span style="font-size: 18px; font-style: italic; padding-left: 10px;" >Имя пользователя:</span>
    <v-flex xs12 style="margin-top: 10px;">
      <v-text-field
        v-model="username"
        type="text"
        label="Укажите имя пользователя"
        solo
      ></v-text-field>
    </v-flex>
    <span style="font-size: 18px; font-style: italic; padding-left: 10px; " >Пароль:</span>
    <v-flex xs12 style="margin-top: 10px;">
      <v-text-field
        v-model="password"
        type="password"
        label="Укажите пароль"
        solo
      ></v-text-field>
    </v-flex>
    <v-btn round color="blue darken-4" style="width:150px;" @click="register" dark>Регистрация</v-btn>
    <router-link to = "/login" style = "font-size: 16px; margin-left: 20px;">Уже есть аккаунт?</router-link>
  </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Registration",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    ...mapActions(["createUser"]),
    register() {
      this.createUser({
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style>
</style>