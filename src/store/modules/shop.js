import api from "@/api";
export default {
  state: {
    goods: {},
    cart: {}
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
    add_to_cart(state, id) {
      state.cart[id] = state.goods[id];
    },
    rem_from_cart(state, id) {
      delete state.cart[id];
    },
    remove_products(state) {
      state.goods = {};
      state.cart = {};
    },
  },
  actions: {
    add_product({ commit }, product) {
      api.axios.post(api.urls["shop"], product).then(res => {
        commit("add_product", res.data);
      });
    },
    get_products({ commit }) {
      api.axios.get(api.urls["shop"]).then(res => {
        commit("remove_products");
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          commit("add_product", data[i]);
        }
      });
    },
    add_cart({ commit }, product_id) {
      console.log(product_id);
      api.axios.post(api.urls["cart"], { "id": product_id }).then(res => {
        console.log(product_id);
        if(res){
          commit("add_to_cart", product_id);
          alert("Товар был добавлен в корзину");
        }
      });
    },

    rem_cart({ commit }, product_id) {
      api.axios.post(api.urls["uncart"], { id: product_id }).then(res => {
        if(res){
          commit("rem_from_cart", product_id);
          alert("Товар был убран из корзины");
        }
      });
    },

    get_cart({ commit }) {
      api.axios.get(api.urls["cart"]).then(res => {
        console.log(res.data);
        let scart = res.data;
        for(let i = 0; i < scart.length; i++){
          commit("add_to_cart", scart[i]);
        }
      });
    }
  }
};
