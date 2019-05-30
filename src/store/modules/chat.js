export default {
  state: {
    chats: [
      {
        chat_id: 0,
        chat_title: "Чат для знакомств",
        chat_cover_img: "https://stmed.net/sites/default/files/cave-wallpapers-27806-2179938.jpg",
        owner_id: 1,
        members_id: [1, 2, 3],
        messages: [
          {
            owner_id: 1,
            owner_message: "Всем привет!",
            sending_time: "22:00"
          },
          {
            owner_id: 3,
            owner_message: "Привет)",
            sending_time: "22:01"
          },
          {
            owner_id: 2,
            owner_message: "Рады видеть вас! Как вас зовут?",
            sending_time: "02:00"
          },
          {
            owner_id: 1,
            owner_message: "Меня зовут Максим",
            sending_time: "22:02"
          },
          {
            owner_id: 3,
            owner_message: "Меня зовут Анна! Приятно познакомиться.",
            sending_time: "02:05"
          },
          {
            owner_id: 2,
            owner_message: "А меня Иваном называют",
            sending_time: "02:09"
          }
        ]
      },{
        chat_id: 1,
        chat_title: "Обсуждение",
        chat_cover_img: "https://w-dog.ru/wallpapers/10/10/560687787772072.jpg",
        owner_id: 1,
        members_id: [1, 2, 3],
        messages: [
          {
            owner_id: 4,
            owner_message: "Добрый день! Вам нравится общаться на этом сайте?",
            sending_time: "22:00"
          },
          {
            owner_id: 3,
            owner_message: "Да, конечно. Это очень удобно.",
            sending_time: "22:01"
          },
          {
            owner_id: 1,
            owner_message: "Мне тоже здесь очень нравится. Много хороших людей.",
            sending_time: "22:02"
          },
          {
            owner_id: 2,
            owner_message: "Полностью согласен!",
            sending_time: "02:00"
          },
          {
            owner_id: 4,
            owner_message: "Я здесь недавно. очень хотелось ваше мнение услышать.",
            sending_time: "22:00"
          },
          {
            owner_id: 4,
            owner_message: "Спасибо!",
            sending_time: "22:00"
          },
          {
            owner_id: 3,
            owner_message: "Не за что)",
            sending_time: "02:05"
          }
        ]
      }
    ],
    members: {
      1:{
        name: "Максим",
        avatar: "https://media.koreus.com/201701/allez-faire-loutre.jpg"
      },
      2:{
        name: "Иван",
        avatar: "data:image/jpeg;base64,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"
      },
      3:{
        name: "Анна",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwhOs-nFklUjzemgXnB8ebbGRyKP3pbktqvkWyqFPpEQyoHVw"
      },
      4:{
        name: "Борис",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzO7dhnhh6bpIMW7FAfWeC7M1z85GruvuQFgSnmYnMxpO7TX78"
      }
    }
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
