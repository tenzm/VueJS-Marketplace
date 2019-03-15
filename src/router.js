import Vue from "vue";
import Router from "vue-router";
import Shop from "./views/Shop.vue";
import News from "./views/News.vue";
import Chat from "./views/Chat.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Shop
    },
    {
      path: "/news",
      component: News
    },
    {
      path: "/chat",
      component: Chat
    }
  ]
});
