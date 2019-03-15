<template>
<div>
  <router-link to = "/">Магазин</router-link>
  <router-link to = "/chat">Чат</router-link>
  <router-link to = "/news">News</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'layout'
}
</script>
