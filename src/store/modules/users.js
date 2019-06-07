import api from "@/api";
import router from "../../router";

export default {
  state: {
    authorized: false,
    avatar: "",
    username: ""
  },
  mutations: {
    authorization(state, auth) {
      state.authorized = auth;
    },
    set_avatar(state, avatar){
      state.avatar = avatar;
    },
    set_username(state, username){
      state.username = username;
    },
  },
  actions: {
    createUser({ state, commit }, user) {
      api.axios.post(api.urls.users, user);
    },
    login({ state, commit }, user) {
      api.axios.post(api.urls.login, user).then(res => {
        localStorage.setItem("jwt", res.data);
        if(res.status != 404){
          commit("authorization", true);
          router.push('/');
        }
      });
    },
    authorize({ state, commit }, is_auth) {
      commit("authorization", is_auth);
    },
    unauthorize({state, commit}){
      commit("authorization", false);
      localStorage.removeItem("jwt");
    },
    save_avatar({state, commit}, image){
      api.axios.post(api.urls.avatar, image).then(res => {
        if(res.data){
          commit("set_avatar", image.avatar);
        }
      });
    },
    get_me({state, commit}){
      api.axios.get(api.urls.avatar).then(res => {
          commit("set_avatar", res.data.avatar);
          commit("set_username", res.data.username);
      });
    },
  }
};
