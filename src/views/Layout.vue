<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
export default {
  name: "layout",
  components: { Navigation }
};
</script>
