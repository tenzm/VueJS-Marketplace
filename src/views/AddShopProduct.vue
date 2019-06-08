<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/news_header.jpg')"
      style="z-index:-1; position:relative;"
      height="150"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Добавить продукт</h1>
      </v-layout>
    </v-parallax>
    <div id="app">
      <v-app id="inspire">
        <v-stepper v-model="e1" vertical>
          <v-stepper-step :complete="e1 > 1" step="1">Укажите тип продукта</v-stepper-step>

          <v-stepper-content step="1">
            <v-card class="mb-5" height="130px" style="padding-top: 30px;">
                  <v-text-field
                    label="Тип продукта"
                    outline
                    counter="75"
                    required
                    v-model="productType"
                  ></v-text-field>
                </v-card>
            <v-btn color="primary" @click="e1 = 2">Далее</v-btn>
            <v-btn disabled color="grey lighten-2" @click="e1 = 2">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e1 > 2" step="2">Укажите название продукта</v-stepper-step>

          <v-stepper-content step="2">
            <v-card class="mb-5" height="130px" style="padding-top: 30px;">
                  <v-text-field
                    label="Название продукта"
                    outline
                    counter="75"
                    required
                    v-model="productName"
                  ></v-text-field>
                </v-card>
            <v-btn color="primary" @click="e1 = 3">Далее</v-btn>
            <v-btn color="grey lighten-2" @click="e1 = 1">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e1 > 3" step="3">Добавьте характеристики для продукта</v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5">
              <div>
                <v-toolbar flat color="white">
                  <v-toolbar-title>Характеристики</v-toolbar-title>
                  <v-divider class="mx-2" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark class="mb-2" v-on="on">Добавить</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                              <v-text-field v-model="editedItem.name" label="Тип"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-text-field v-model="editedItem.value" label="Значение"></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="close">Отмена</v-btn>
                        <v-btn color="blue darken-1" flat @click="save">Сохранить</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
                <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                  <template v-slot:items="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.value }}</td>
                    <td class="justify-center layout px-0">
                      <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                      <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                    </td>
                  </template>
                </v-data-table>
              </div>
            </v-card>
            <v-btn color="primary" @click="e1 = 4">Далее</v-btn>
            <v-btn color="grey lighten-2" @click="e1 = 2">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e1 > 4" step="4">Добавьте изображение продукта (обязательно)</v-stepper-step>

          <v-stepper-content step="4">
            <v-card class="mb-5" height="130px" style="padding-top:40px;">
                  <form action="/uploads" @submit.prevent>
                    <input ref="inputProductFile" type="file">
                  </form>
                </v-card>
            <v-btn color="primary" @click="e1 = 5">Далее</v-btn>
            <v-btn color="grey lighten-2" @click="e1 = 3">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e1 > 5" step="5">Укажите цену</v-stepper-step>
          <v-stepper-content step="5">
            <v-card class="mb-5" height="130px" style="padding-top: 30px;">
                  <v-text-field
                    label="Цена (без валюты)"
                    outline
                    counter="75"
                    required
                    v-model="productPrice"
                  ></v-text-field>
                </v-card>
                <v-btn color="success" @click="makeAndSave" :disabled="sending_dialog" :loading="sending_dialog">Опубликовать</v-btn>
            <v-btn color="grey lighten-2" @click="e1 = 4">Назад</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-app>
    </div>
    <v-dialog
      v-model="sending_dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Подождите, пожалуйста. Ваш продукт загружается на сервер.
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
  data: () => ({
    productName: "",
    productType: "",
    productPrice: "",
    inputProductFile: "",
    e1: 1,
    dialog: false,
    sending_dialog: false,
    headers: [
      {
        text: "Тип",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Значение", value: "value", align: "left", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      value: ""
    },
    defaultItem: {
      name: "",
      value: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Добавить" : "Изменить";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions(["add_product", "uploadImage"]),
    makeAndSave(){
        let buildOptions = {};
        for(let i = 0; i < this.desserts.length; i++)
            buildOptions[this.desserts[i].name] = this.desserts[i].value;
        
        let formData = new FormData();
        formData.append("image", this.$refs.inputProductFile.files[0]);
        this.uploadImage(formData).then(src => {
        let product = {
            name: this.productName,
            type: this.productType,
            options: buildOptions,
            price: this.productPrice,
            img: src
        }
      this.sending_dialog = true;
      this.add_product(product);
      });
    },

    initialize() {
      this.desserts = [];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Вы уверены, что хотите удалить этот элемент?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style>
.info-text {
  font-size: 16px !important;
  font-weight: 500;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
  font-family: "Roboto", sans-serif !important;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>