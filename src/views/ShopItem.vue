<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/news_header.jpg')"
      style="z-index:-1; position:relative;"
      height="150"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Товар</h1>
      </v-layout>
    </v-parallax>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 class="clearfix" style="text-align: center; margin-top: 50px;">
          <div style="width: 320px; display: inline-block; vertical-align: top;">
            <v-img :aspect-ratio="3/4" :src="product.image"></v-img>
          </div>
          <div
            style="display: inline-block; vertical-align: top; text-align: left; margin-left: 30px; margin-top: 30px;"
          >
            <span class="display-3 font-weight-light" style="display:block;">{{product.name}}</span>
            <span class="headline" style="margin-top: 30px; display: block;">Характеристики:</span>
            <span
              class="title font-weight-light"
              style="margin-top: 10px; display: block;"
              v-for="(item, key) in product.options"
              :key="key"
            >
              <span class="font-weight-regular">{{key}}:</span>
              {{item}}
            </span>
            <span class="headline" style="margin-top: 30px; display: block;">{{product.price}} ₽</span>
            <div>
              <v-btn
                large
                color="red darken-1"
                class="subheading"
                style="color: white; margin-left: -2px; margin-top: 10px;"
              >Купить</v-btn>
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
  name: "shop",
  data() {
    return {
      id: "",
      product: ""
    };
  },
  computed: {
    ...mapState({
      goods: state => state.shop.goods
    })
  },
  beforeMount() {
    this.id = this.$route.params.id;
    this.product = this.goods[this.id];
    console.log(this.product);
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