import Vue from "vue";
import Vuex from "vuex";

import news from './modules/news';
import chat from './modules/chat';
import users from './modules/users';
import shop from './modules/shop';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    chat,
    users,
    shop
  }
});
