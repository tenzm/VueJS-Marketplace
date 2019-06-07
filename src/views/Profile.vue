<template>
<div class = "coverdiv">
  <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Авторизация</h1>
      </v-layout>
    </v-parallax>
  
    <form action="/uploads" @submit.prevent>
        <input ref="inputAvatar" type="file">
    </form>
    <v-btn color="success" @click="saveAvatar">Сохранить</v-btn>

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
    ...mapActions(["save_avatar", "uploadImage"]),
    saveAvatar() {
      let formData = new FormData();
      formData.append("image", this.$refs.inputAvatar.files[0]);
      this.uploadImage(formData).then(src => {
        console.log(src);
        this.save_avatar({"avatar": src});
      });
    }
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