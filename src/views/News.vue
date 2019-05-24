<template>
  <div>
    <v-parallax dark :src="require('@/assets/news_header.jpg')" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Главные новости</h1>
      </v-layout>
    </v-parallax>
    <div style="margin: 50px auto; width:800px;">
      <span class="headline font-weight-light">Сегодня</span>
      <v-hover v-for="(item, key) in news" :key="key" style="margin-top: 10px;">
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
          <v-card-title>
            <img v-bind:src="getImgUrl('coffee.jpg')" width="150">
            <div style="padding-left: 20px;">
              <span class="headline">{{item.title}}</span>
              <br>
              <span class="subheading">{{item.text}}</span>
            </div>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
      </v-hover>
    </div>
    <v-btn v-if="auth" @click="addd_news">Add</v-btn>
    <v-btn @click="gett_news">Get</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "news",
  methods: {
    ...mapActions(["add_news", "get_news"]),
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    addd_news() {
      let article = {
        title: prompt("Укажите заголовок", ""),
        text: prompt("Укажите содержимое", "")
      };
      this.add_news(article);
    },
    gett_news(){
      this.get_news();
    }
  },
  data: () => ({
    number: 2
  }),
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
