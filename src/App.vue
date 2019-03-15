<template>
  <div>
    <router-link to="/">Магазин</router-link>
    <router-link to="/chat">Чат</router-link>
    <router-link to="/news">News</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from "@/views/Layout";
export default {
  name: "App",
  components: {},
  data: () => ({})
};
</script>
