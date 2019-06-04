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
    <v-container grid-list-xl >
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 class="clearfix">
        <div style = "width: 20vw;">
        <v-img
              :aspect-ratio="3/4"
              :src="product.image"
            ></v-img>
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
      goods: state => state.shop.goods,
    })
  },
  beforeMount(){
    this.id = (this.$route.params.id)
    this.product = this.goods[this.id]
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