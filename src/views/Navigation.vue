<template>
  <v-toolbar color="grey lighten-4" dark extended>
      <v-btn icon light v-on="on" to="/shopcart" class="black--text" style="border: 0;">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
    <v-spacer></v-spacer>
    <template>
      <div class="display-1 font-weight-thin black--text display-1">Infinity Club</div>
    </template>

    <v-spacer></v-spacer>
    <template v-slot:extension>
      <v-layout style="margin-bottom: 10px;" align-center column justify-center fill-height>
        <v-toolbar-items>
          <v-btn flat round to="/" class="black--text subheading">Магазин</v-btn>
          <v-btn flat round to="/chat" class="black--text subheading">Чат</v-btn>
          <v-btn flat round to="/news" class="black--text subheading">Новости</v-btn>
        </v-toolbar-items>
      </v-layout>
    </template>

    <v-menu open-on-hover bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon light v-on="on" class="black--text" style="border: 0;">
          <v-icon v-if="avatar == 'null' || avatar == ''">account_circle</v-icon>
           <v-avatar :size="40" style="margin-right: 10px;" v-else>
                  <v-img :src="avatar" spect-ratio="1" height="40" ></v-img>
                </v-avatar>
        </v-btn>
       
      </template>

      <v-list>
        <v-list-tile v-if="!auth" to="/login">
          <v-list-tile-title>Вход</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="!auth" to="/registration">
          <v-list-tile-title>Регистрация</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="auth" to="/profile">
          <v-list-tile-title>Профиль</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-if="auth" @click="logout">
          <v-list-tile-title>Выход</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "navigation",
  methods:{
    ...mapActions(["unauthorize", "add_cart", "get_me"]),
    logout: function() {
      this.unauthorize();
      if(this.$route.path == "/profile"){
        this.$router.push("/login");
      }
    },
    add_to_cart(){
      this.add_cart();
    },
    load_avatar(){
      this.get_me()
    }
  },
  created(){
    this.load_avatar();
  },
  computed: {
    ...mapState({
      avatar: state => state.users.avatar,
      auth: state => state.users.authorized,
    })
  },
};
</script>
