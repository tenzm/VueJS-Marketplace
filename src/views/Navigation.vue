<template>
  <v-toolbar color="grey lighten-4" dark extended>
    <v-toolbar-side-icon class="black--text"></v-toolbar-side-icon>

    <v-spacer></v-spacer>
    <template>
      <div class="display-1 font-weight-thin black--text display-1">Infinity Club</div>
    </template>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-layout style="margin-bottom: 10px;" align-center column justify-center fill-height>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat round to="/" class="black--text subheading">Магазин</v-btn>
          <v-btn flat round to="/chat" class="black--text subheading">Чат</v-btn>
          <v-btn flat round to="/news" class="black--text subheading">Новости</v-btn>
        </v-toolbar-items>
      </v-layout>
    </template>

    <v-btn icon class="black--text">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "navigation"
};
</script>
