<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/news_header.jpg')"
      style="z-index:-1; position:relative;"
      height="150"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Добавить новость</h1>
      </v-layout>
    </v-parallax>
    <div style="margin: 50px auto; width:800px;">
      <div id="app">
        <v-app id="inspire">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Укажите заголовок</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Укажите содержимое</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Загрузите изображение (опционально)</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-5" height="130px" style="padding-top: 30px;">
                  <v-text-field
                    label="Укажите заголовок для новости"
                    outline
                    counter="75"
                    required
                    v-model="headtitle"
                  ></v-text-field>
                </v-card>

                <v-btn color="primary" @click="e1 = 2">Далее</v-btn>
                <v-btn disabled color="grey lighten-2" @click="e1 = 2">Назад</v-btn>

                <v-btn flat>Отмена</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-5" height="130px">
                  <v-textarea
                    outline
                    name="input-7-4"
                    label="Укажите содержимое для новости"
                    v-model="content"
                    required
                  ></v-textarea>
                </v-card>

                <v-btn color="primary" @click="e1 = 3">Далее</v-btn>
                <v-btn color="grey lighten-2" @click="e1 = 1">Назад</v-btn>

                <v-btn flat>Отмена</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-5" height="130px" style="padding-top:40px;">
                  <form action="/uploads" @submit.prevent>
                    <input ref="inputFile" type="file">
                  </form>
                </v-card>

                <v-btn color="success" @click="addd_news" :disabled="dialog" :loading="dialog">Опубликовать</v-btn>
                <v-btn color="grey lighten-2" @click="e1 = 2">Назад</v-btn>

                <v-btn flat>Отмена</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-app>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Подождите, пожалуйста. Ваша новость загружается на сервер.
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "add_news",
  data: () => ({
    headtitle: "",
    content: "",
    e1: 0,
    dialog: false
  }),
  methods: {
    ...mapActions(["add_news", "uploadImage"]),
    addd_news(headtitle, content) {
      let formData = new FormData();
      formData.append("image", this.$refs.inputFile.files[0]);
      this.uploadImage(formData).then(src => {
      let article = {
        title: this.headtitle,
        text: this.content,
        img: src
      };

      this.dialog = true;
      this.add_news(article);
      });
    }
  }
};
</script>
