<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/news_header.jpg')"
      style="z-index:-1; position:relative;"
      height="150"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Магазин</h1>
      </v-layout>
    </v-parallax>
    <v-flex text-xs-center>
        <div>
          <v-btn round color="blue darken-2" style="color: white; margin-top:10px;" large v-if="auth" @click="go_to_add_page">Добавить</v-btn>
        </div>
      </v-flex>
    <v-container grid-list-xl >
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 style = "display: inline-block; text-align: center;" class="clearfix">
        <v-hover style = "
        vertical-align:top;display: inline-block; text-align: left; margin: 25px; position: relative;
			box-sizing: border-box;" v-for="(item, key) in goods" :key="key">
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            width="250px"
          ><router-link :to="'/shop/' + key">
            <v-img
              :aspect-ratio="3/4"
              :src="item.image"
            ></v-img></router-link>

            <v-card-title>
              <div>
                <div style="height: 58px;">
                <div v-if="!hover" style="height: 100%;">
                <span class="headline font-weight-thin" style="display: block;">{{item.name}}</span>
                <span
                  class="info-text font-weight-light"
                  style="display: block; margin-top: 10px;"
                >{{item.type}}</span></div>
                <div v-if="hover" style="height: 100%; float: left; width: 250px;">
                  <v-btn v-if="cart[key] != goods[key]" @click="add_to_cart(key)" color="teal darken-4" style="float: left; width: 125px; height: 90%; color: white; margin-left: -16px; border-radius: 0px; z-index: 3; text-align: left;">
                    <v-icon right dark style="margin-left: 3px;">local_grocery_store</v-icon>
                  </v-btn>
                  <v-btn v-else @click="rem_cart(key);" color="red darken-3" style="float: left; width: 125px; height: 90%; color: white; margin-left: -16px; border-radius: 0px; z-index: 3; text-align: left;">
                    <v-icon right dark style="margin-left: 3px;">remove_shopping_cart</v-icon>
                  </v-btn>
                  <v-btn :to="'/shop/' + key" color="teal lighten-5" style="float: left; width: 125px; height: 90%; color: black; margin-left: -8px; border-radius: 0px; z-index: 3; text-align: center;">
                    <v-icon right dark style="margin-left: 3px;">toc</v-icon>
                  </v-btn>
                </div>

              </div>
                <span
                  class="headline font-weight-light"
                  style="display: block; margin-top: 10px;"
                >{{item.price}} ₽</span>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "shop",
  methods:{
    ...mapActions(["get_products", "add_cart", "get_cart", "rem_cart"]),
    load_products(){
      this.get_products();
      this.get_cart();
    },
    go_to_add_page(){
      this.$router.push("/new-product");
    },
    add_to_cart(id){
      this.add_cart(id);
    },
    remove_from_cart(id){
      this.rem_cart(id);
    }
  },
  beforeMount(){
    this.load_products();
  },
  computed: {
    ...mapState({
      goods: state => state.shop.goods,
      cart: state => state.shop.cart,
      auth: state => state.users.authorized,
    }),
    function () {
      this.load_products();
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