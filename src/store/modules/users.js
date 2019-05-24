import api from "@/api";

export default {
  state: {
    authorized: false
  },
  mutations: {
    authorization(state, auth) {
      state.authorized = auth;
    }
  },
  actions: {
    createUser({ state, commit }, user) {
      api.axios.post(api.urls.users, user);
    },
    login({ state, commit }, user) {
      api.axios.post(api.urls.login, user).then(res => {
        localStorage.setItem("jwt", res.data);
        if(res.status != 404)
          commit("authorization", true);
      });
    },
    authorize({ state, commit }, is_auth) {
      commit("authorization", is_auth);
    }
  }
};
