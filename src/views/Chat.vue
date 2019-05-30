<template>
  <div>
    <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Чаты</h1>
      </v-layout>
    </v-parallax>
    <v-container>
      <v-layout row justify-center style="margin-top: 40px;">
        <v-card style="width: 270px;">
          <!-- Adaptability will be made in the future -->
          <v-list subheader>
            <v-subheader>Доступные чаты</v-subheader>
            <v-divider></v-divider>
            <v-list-tile
              v-for="(chat, key) in chats"
              :key="key"
              @click="selected_chat_id = chat.chat_id"
            >
              <v-avatar :size="40" style="margin-right:10px;">
                <img :src="chat.chat_cover_img">
              </v-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="chat.chat_title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>
        </v-card>
        <v-flex xs4 style="margin-left: 10px;">
          <v-card style="height: 450px;">
            <v-subheader>Сообщения</v-subheader>
            <v-divider></v-divider>
            <div class="scroll-y" style="height: 89%;">
              <div
                v-for="(message, key) in chats[selected_chat_id].messages"
                :key="key"
                style="margin-left:10px; margin:10px; 0"
              >
                <v-avatar :size="40">
                  <img :src="members[message.owner_id].avatar">
                </v-avatar>
                <span
                  style="margin-left:10px; font-size:14px; font-weight: bold;"
                >{{members[message.owner_id].name}}</span>
                <v-hover>
                  <v-card
                    style="width: 70%; margin-top: -5px; margin-left:45px; border-radius: 0 10px 10px 10px;"
                  >
                    <v-card-title>{{message.owner_message}}</v-card-title>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card>
          <div style="margin-top: 10px;">
            <v-text-field
              v-model="message2"
              solo
              label="Сообщение"
              clearable
              style="width: 90%; float:left;"
            ></v-text-field>
            <v-btn flat icon color="#212121" style="float:right;">
              <v-icon>send</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "chat",
  computed: {
    ...mapState({
      chats: state => state.chat.chats,
      members: state => state.chat.members
    })
  },
  methods: {
    ...mapActions(["add_article"]),
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    add_news() {
      let article = {
        title: prompt("Укажите заголовок", ""),
        text: prompt("Укажите содержимое", "")
      };
      this.add_article(article);
    }
  },
  data() {
    return {
      selected_chat_id: 0,
      items: [
        {
          active: true,
          title: "Jason Oner",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          active: true,
          title: "Ranee Carlson",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
        },
        {
          title: "Cindy Baker",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
        },
        {
          title: "Ali Connors",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        }
      ],
      items2: [
        {
          title: "Travis Howard",
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
        }
      ]
    };
  }
};
</script>
