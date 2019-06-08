import api from '@/api';
import router from '../../router';
export default {
  state: {
    news: [
      {
        title: "Хранилище",
        text: "Заработало!",
        img: "coffee.jpg", 
        createdAt: Date
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

        this.timerId = setTimeout(function tick() {router.push("/news"); }, 4000);
        
      });
    },
    get_news({ state, commit }) {
      api.axios.get(api.urls["news"]).then(res=>{
        commit("set_news", res.data);
      });
    },
    uploadImage({}, formData) {
      // Отправляем новость на сервер
      return api.axios
        .put(api.urls["uploads"] + "/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          return res.data;
        });
    }
  }
};
