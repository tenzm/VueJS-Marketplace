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
    {{ id }}dfdfd
  </div>
</template>

<script>
export default {
  name: "shop",
  data() {
    return {
      id: "",
    };
  },
  beforeMount(){
    this.id = (this.$route.params.id)
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