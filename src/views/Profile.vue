<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/news_header.jpg')"
      style="z-index:-1; position:relative;"
      height="150"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Профиль</h1>
      </v-layout>
    </v-parallax>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 class="clearfix" style="text-align: center; margin-top: 50px;">
            <div style="width: 320px; display: inline-block; vertical-align: top;">
        <span class="headline font-weight-light" style="display:block; text-align: left;">Мой аватар:</span>
          <div style="">
            <v-img :aspect-ratio="1" width="300" :src="avatar"></v-img>
          </div>
          </div>
          <div
            style="display: inline-block; vertical-align: top; text-align: left; margin-left: 30px; margin-top: 30px;"
          >
        <span class="headline font-weight-light" style="display:block; text-align: left; ">Имя:</span>
            <span class="display-3 font-weight-light" style="display:block;">{{ username }}</span>
            <span class="headline font-weight-light" style="display:block; text-align: left; margin-top: 50px;">Изменить аватар:</span>
            <form action="/uploads" @submit.prevent>
        <input ref="inputAvatar" type="file" style="margin-top: 20px;">
    </form>
    <v-btn color="light-green darken-1" style="color: white; margin-left: 0px;
    margin-top: 15px;" @click="saveAvatar">Сохранить</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({}),
  methods: {
    ...mapActions(["save_avatar", "uploadImage", "get_me"]),
    saveAvatar() {
      let formData = new FormData();
      formData.append("image", this.$refs.inputAvatar.files[0]);
      this.uploadImage(formData).then(src => {
        this.save_avatar({"avatar": src});
      });
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
      username: state => state.users.username,
    })
  },
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