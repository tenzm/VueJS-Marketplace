import api from "@/api";
import router from "../../router";

export default {
  state: {
    authorized: false,
    avatar: "",
    username: "",
    errors: {
      "login_error": false,
      "register_error": false,
    }
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
    set_login_error(state, bool){
      state.errors["login_error"] = bool;
    },
    set_register_error(state, bool){
      state.errors["register_error"] = bool;
    },
  },
  actions: {
    createUser({ dispatch, commit }, user) {
      api.axios.post(api.urls.users, user).then(res => {
        if(res.status != 404){
          dispatch('login', user);
        }
        else{
          console.log("erf1e");
        }
      }).catch(() => {
        console.log("erfe2");
        commit("set_register_error", true);
      });
    },
    login({ dispatch, commit }, user) {
      api.axios.post(api.urls.login, user).then(res => {
        localStorage.setItem("jwt", res.data);
        if(res.status != 404){
          commit("authorization", true);
          dispatch('get_me');
          router.push('/');
        }
      }).catch(() => {
        commit("set_login_error", true);
      })
    },
    authorize({ state, commit }, is_auth) {
      commit("authorization", is_auth);
    },
    unauthorize({state, commit}){
      commit("authorization", false);
      commit("set_avatar", false);
      commit("set_username", false);
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
    remove_errors({state, commit}){
      commit("set_login_error", false);
      commit("set_register_error", false);
    }
  }
};
