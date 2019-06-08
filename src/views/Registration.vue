<template>
<div class = "coverdiv">
  <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Регистрация</h1>
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
      v-model="register_error"
      :value="register_error"
      type="error"
      color="red"
      style="margin-bottom: 20px;"
    >
      Пользователь с таким именем уже существует.
    </v-alert>
    <div>
    <v-btn color="primary" depressed style="width:120px;" @click="register" dark>Регистрация</v-btn>
    <router-link to = "/login" depressed style = "font-size: 16px; color: black; margin-left: 20px;">Уже есть аккаунт?</router-link>
    </div>
  </v-flex>
  </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
        password: this.password,
        avatar: 'null',
      });
      this.register_error = true
    }
  },
  computed: {
    ...mapState({
      register_error: state => state.users.errors.register_error,
      })
  }
};
</script>

<style>
</style>