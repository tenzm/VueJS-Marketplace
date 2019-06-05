import Vue from "vue";
import store from "./store/modules/users";
import api from "@/api";
import Router from "vue-router";
import Shop from "./views/Shop.vue";
import ShopItem from "./views/ShopItem.vue";
import News from "./views/News.vue";
import AddNews from "./views/AddNews.vue";
import AddProduct from "./views/AddShopProduct.vue";
import Chat from "./views/Chat.vue";
import Profile from "./views/Profile.vue";
import Registration from "./views/Registration";
import Login from "./views/Login";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/shop",
      component: Shop
    },
    {
      path: "/shop/:id",
      component: ShopItem
    },
    {
      path: "/",
      redirect: "/shop"
    },
    {
      path: "/new-product",
      component: AddProduct,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/add_news",
      component: AddNews,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/chat",
      component: Chat
    },
    {
      path: "/profile",
      component: Profile
    },
    { path: "/registration", component: Registration },
    { path: "/login", component: Login }
    
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let authorized = false;
    api.axios.post(api.urls["check"]).then(res=>{
      authorized = res.data;
      if (authorized) {
        // check if the user is authenticated
        next(); // the next method allow the user to continue to the router
      } else {
        next("/login"); // Redirect the user to the main page
      }
    });
  } else {
    next();
  }
});
export default router;
