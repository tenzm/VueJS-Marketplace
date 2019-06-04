export default {
  state: {
    goods: {
      "12345": {
        type: "Мобильный телефон",
        name: "Apple iPhone 7",
        options: {
          "Бренд": "Apple",
          "Модель": "Iphone 7",
          "ОЗУ": "1 ГБ",
          "Операционная система": "iOS",
          "Встроенная память": "128 ГБ"
        },
      price: "39 990",
      image: "https://istoremsk.ru/image/cache/catalog/iPhone/Iphone_7/Mat/1-450x550.jpg",
      },
      "23456": {
        type: "Моноблок",
        name: "Apple iMac Pro",
        options: {
          "Бренд": "Apple",
          "Модель": "iMac Pro",
          "ОЗУ": "32 ГБ",
          "Операционная система": "MacOS",
          "Встроенная память": "1 ТБ"
        },
      price: "379 990",
      image: "https://istoremsk.ru/image/cache/catalog/imac/pro/pro/1-450x550.jpg",
    },
    "34567": {
      type: "Ноутбук",
      name: "Apple MacBook Pro",
      options: {
        "Бренд": "Apple",
        "Модель": "MacBook Pro",
        "ОЗУ": "32 ГБ",
        "Операционная система": "MacOS",
        "Встроенная память": "1 ТБ"
      },
    price: "297 990",
    image: "https://istoremsk.ru/image/cache/catalog/macbookpro15/new/space/1-450x550.jpg",
  },
  "45678": {
    type: "Док станция",
    name: "Apple Mac Pro",
    options: {
      "Бренд": "Apple",
      "Модель": "Mac Pro",
      "ОЗУ": "16 ГБ",
      "Операционная система": "MacOS",
      "Встроенная память": "256 ГБ"
    },
  price: "279 990",
  image: "https://istoremsk.ru/image/cache/catalog/mac_pro/1-450x550.jpg",
  }
},
  },
  mutations: {
    add_chat(state, chat) {
      state.chats.push(chat);
    },
    add_message(state, message) {
        state.chat.messages.push(message);
    },
    set_news(state, news) {
      state.news = news;
    }
  },
  actions: {
    add_article({commit }, send_id, message) {
        let new_message = {
            owner_id: send_id,
            owner_message: message,
            sending_time: "--:--"
        } 
      commit("add_message", new_message);
    }
  }
};
