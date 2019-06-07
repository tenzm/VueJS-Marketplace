<template>
  <div>
    <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Лента новостей</h1>
      </v-layout>
    </v-parallax>
      <v-flex text-xs-center>
        <div>
          <v-btn round color="blue darken-2" style="color: white; margin-top:10px;" large v-if="auth" @click="go_to_news">Добавить</v-btn>
        </div>
      </v-flex>

    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 class="clearfix" style="text-align: center; margin-top: 50px;">
            <div style="width: 100%; display: inline-block; vertical-align: top; text-align:left;">
    <div style="width:100%; margin-top: 20px; padding-bottom: 60px">
      <div v-for="(item, key) in news" :key="key" style="margin-top: 20px;" class = "news">
    <span v-if="key == 0 || is_not_equal_date(news[key].createdAt, news[key-1].createdAt)" class="headline font-weight-light" style="margin-top:30px;">{{formatDate(item.createdAt)}}</span>
      <v-hover style="margin-top: 10px;">
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
          <v-card-title style="">
            <v-img :src="item.img" aspect-ratio="1" height="150" width="150" class = "news-img"></v-img>
            <div style="width: 500px; float: left;" class="news-text">
              <span class="headline">{{item.title}}</span>
              <br>
              <span class="subheading">{{item.text}}</span>
            </div>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
      </v-hover>
      </div>
    </div>
            </div>
        </v-flex>
      </v-layout>
    </v-container>
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
    },
    formatDate(date){
      let d = new Date(date);
      let now = new Date();
      if(now.getDate() == d.getDate() && now.getMonth() == d.getMonth() && now.getFullYear() == d.getFullYear()) return "Сегодня";
      now.setDate(now.getDate() - 1);
      if(now.getDate() == d.getDate() && now.getMonth() == d.getMonth() && now.getFullYear() == d.getFullYear()) return "Вчера";
      return ('0' + d.getDate()).slice(-2) + "." + ('0' + d.getMonth()).slice(-2) + "." + d.getFullYear();
      
    },
    is_not_equal_date(date1, date2){
      let d1 = this.formatDate(date1);
      let d2 = this.formatDate(date2);
      if(d1 == d2) return false;
      return true;
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


.news .v-image__image.v-image__image--cover {
    width: 150px;
}

@media screen and (max-width: 900px) {
    .news .v-image__image--cover {
    width: 150px !important;
    background-size: cover;
}
.news .v-card__title {
    display: inline-block;
    text-align: center;
    width: 100%;
}

.news .v-responsive.v-image {
    display: inline-block;
    text-align: center;
    margin-top: 15px;
}

.news .news-text{
    width: 100% !important;
    margin: 15px 0;
}

.news .news-img{
  width: 150px;
}
  }

</style>