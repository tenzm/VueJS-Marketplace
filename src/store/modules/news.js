export default({
    state: {
      news:[
        {
          title: "Хранилище",
          text: "Заработало!",
          img: 'coffee.jpg',
        }
      ]
    },
    mutations: {
      add_news(state, article){
        state.news.push(article);
      },
      set_news(state, news){
        state.news = news;
      }
    },
    actions: {
      add_article({state, commit}, article){
        commit("add_news", article);
      }
    }
  });