import Vue from "vue";
import store from "./store/modules/users";
import Router from "vue-router";
import Shop from "./views/Shop.vue";
import News from "./views/News.vue";
import Chat from "./views/Chat.vue";
import Profile from "./views/Profile.vue";
import Registration from "./views/Registration";
import Login from "./views/Login";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Shop
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/chat",
      component: Chat
    },
    {
      path: "/profile",
      component: Profile
    },
    { path: "/reg", component: Registration },
    { path: "/login", component: Login }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // check the meta field
    if (store.state.authorized) {
      // check if the user is authenticated
      next(); // the next method allow the user to continue to the router
    } else {
      next("/login"); // Redirect the user to the main page
    }
  } else {
    next();
  }
});
export default router;
