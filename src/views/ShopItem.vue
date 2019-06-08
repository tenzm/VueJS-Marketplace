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
            <v-img :aspect-ratio="3/4" :src="goods[id].image"></v-img>
          </div>
          <div
            style="display: inline-block; vertical-align: top; text-align: left; margin-left: 30px; margin-top: 30px;"
          >
            <span class="display-3 font-weight-light" style="display:block;">{{goods[id].name}}</span>
            <span class="headline" style="margin-top: 30px; display: block;">Характеристики:</span>
            <span
              class="title font-weight-light"
              style="margin-top: 10px; display: block;"
              v-for="(item, key) in goods[id].options"
              :key="key"
            >
              <span class="font-weight-regular">{{key}}:</span>
              {{item}}
            </span>
            <div style="width: 100%; display: inline-block;">
            <span class="headline" style="margin-top: 30px; display: block; float: left;">{{goods[id].price}} ₽</span>
            <span v-if="is_in_cart" class="title" style="    color: rgb(139, 195, 74);
    float: left;
    margin-top: 32px;"><v-icon right color="light-green" style="font-style: 14px; margin-right: 10px;">done</v-icon>В корзине.</span>
            
            </div><div>
              <v-btn
                large
                color="blue"
                class="subheading"
                style="color: white; margin-left: -2px; margin-top: 10px;"
              >Купить</v-btn>
              <v-btn
                large
                color="light-green"
                class="subheading"
                style="color: white; margin-left: -2px; margin-top: 10px;"
                @click="add_to_cart"
                v-if="!is_in_cart"
              >Добавить в корзину</v-btn>
              <v-btn
                large
                color="red darken-3"
                class="subheading"
                style="color: white; margin-left: -2px; margin-top: 10px;"
                @click="remove_from_cart"
                v-if="is_in_cart"
              >Удалить из корзины</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { constants } from 'crypto';
export default {
  name: "shop",
  data() {
    return {
      id: "",
      product: "",
      is_in_cart: false, 
    };
  },
  methods: {
    ...mapActions(["get_products", "add_cart", "get_cart", "rem_cart"]),
    load_products(){
      this.get_products();
      this.get_cart()
    },
    add_to_cart(){
      this.add_cart(this.id);
      this.is_in_cart = true;
    },
    remove_from_cart(){
      this.rem_cart(this.id);
      this.is_in_cart = false;
    }
  },
  beforeMount() {
    this.id = this.$route.params.id;
    this.load_products(this.id);
    if(this.cart[this.id] != undefined){
      this.is_in_cart = true;
      }
  },
  computed: {
    ...mapState({
      goods: state => state.shop.goods,
      cart: state => state.shop.cart
    }),
    function () {
      this.load_products();
      if(this.cart[this.id] != undefined){
      this.is_in_cart = true;
      }
    }
  },
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