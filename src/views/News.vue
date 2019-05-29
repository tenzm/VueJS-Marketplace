<template>
  <div>
    <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Главные новости</h1>
      </v-layout>
    </v-parallax>
    <div style="margin: 50px auto; width:800px;">
      <span class="headline font-weight-light">Сегодня</span>
      <v-hover v-for="(item, key) in news" :key="key" style="margin-top: 10px;">
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
          <v-card-title>
            <v-img :src="item.img" aspect-ratio="1" height="150"></v-img>
            <div style="margin-left: -20px; width: 400px;">
              <span class="headline">{{item.title}}</span>
              <br>
              <span class="subheading">{{item.text}}</span>
            </div>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
      </v-hover>
    </div>
    <v-btn v-if="auth" @click="go_to_news">Add</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "news",
  methods: {
    ...mapActions(["get_news"]),
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    gett_news(){
      this.get_news();
    },
    go_to_news(){
      this.$router.push('/add_news')
    }
  },
  beforeMount(){
      this.gett_news();
  },
  computed: {
    ...mapState({
      news: state => state.news.news,
      auth: state => state.users.authorized,
    })
  },
};
</script>
<style>
.v-image__image--cover {
    width: 150px !important;
    background-size: cover;
}
</style>