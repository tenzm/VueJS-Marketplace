import api from '@/api';
export default {
  state: {
    news: [
      {
        title: "Хранилище",
        text: "Заработало!",
        img: "coffee.jpg"
      }
    ]
  },
  mutations: {
    add_news(state, article) {
      state.news.push(article);
    },
    set_news(state, news) {
      state.news = news;
    }
  },
  actions: {
    add_news({ state, commit }, article) {
      api.axios.post(api.urls["news"], article).then(res=>{
        commit("add_news", res.data);
      });
    },
    get_news({ state, commit }) {
      api.axios.get(api.urls["news"]).then(res=>{
        commit("set_news", res.data);
      });
    }
  }
};
