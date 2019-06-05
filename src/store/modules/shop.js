import api from "@/api";
export default {
  state: {
    goods: {}
  },
  mutations: {
    add_product(state, res) {
      let new_product = {
        type: res["type"],
        name: res["name"],
        options: res["options"],
        price: res["price"],
        image: res["img"]
      };
      state.goods[res["_id"]] = new_product;
    },
    remove_products(state) {
      state.goods = {};
    }
  },
  actions: {
    add_product({ commit }, product) {
      api.axios.post(api.urls["shop"], product).then(res => {
        commit("add_product", res.data);
        //console.log(res.data["_id"]);
        //
      });
    },
    get_products({ commit }) {
      api.axios.get(api.urls["shop"]).then(res => {
        commit("remove_products", res.data);
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          commit("add_product", data[i]);
        }
      });
    }
  }
};
