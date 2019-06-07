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
            <v-subheader>Доступные чаты
{{selected_chat_id}}</v-subheader>
            <v-divider></v-divider>
            <v-list-tile
              v-for="(user, key) in users"
              :key="key"
              @click="selected_chat_id = key"
            >
              <!--<v-avatar :size="40" style="margin-right:10px;">
                <img :src="chat.chat_cover_img">
              </v-avatar>-->
              <v-list-tile-content>
                <v-list-tile-title v-html="user.username"></v-list-tile-title>
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
                v-for="(message, key) in messages"
                :key="key"
              >
              <div v-if="message.to == selected_chat_id || message.from == selected_chat_id" style="    
">
                <div v-if="message.from == me.id" style="margin-top:10px; margin-bottom: 10px; 
    padding-left: 30%; width: 100%; text-align: right; float:right;">
                <span
                  style="margin-right:10px; font-size:14px; font-weight: bold; "
                >
                {{ me.username }}</span>
                <v-avatar :size="40" style="margin-right: 10px;">
                  <v-img :src="me_avatar" spect-ratio="1" height="40" ></v-img>
                </v-avatar>
                
                <v-hover>
                  <v-card
                    style="width: 70%; margin-top: -5px; 
    text-align: right; border-radius: 10px 0 10px 10px; float:right;   margin-right: 60px;"
                  >
                    <v-card-title>{{message.text}}</v-card-title>
                  </v-card>
                </v-hover>
              </div>
              <div v-else style="margin-left:10px; margin:10px; width: 100%;">
                <v-avatar :size="40">
                  <v-img :src="users[message.from].avatar" spect-ratio="1" height="40" ></v-img>
                </v-avatar>
                <span
                  style="margin-left:10px; font-size:14px; font-weight: bold;"
                  v-if="message.from != me.id"
                >
                {{ users[message.from].username }}</span>
                <span
                  style="margin-left:10px; font-size:14px; font-weight: bold;"
                  v-else
                >
                {{ me.username }}</span>
                <v-hover>
                  <v-card
                    style="width: 70%; margin-top: -5px; margin-left:45px; border-radius: 0 10px 10px 10px;"
                  >
                    <v-card-title>{{message.text}}</v-card-title>
                  </v-card>
                </v-hover>
              </div>
              </div>
            </div>
            </div>
          </v-card>
          <div style="margin-top: 10px;">
            <v-text-field
              v-model="mes_text"
              solo
              label="Сообщение"
              clearable
              style="width: 90%; float:left;"
            ></v-text-field>
            <v-btn flat icon color="#212121" @click="send_message(selected_chat_id, mes_text)" style="float:right;">
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
import api from "@/api"
import { setInterval } from 'timers';
export default {
  name: "chat",
  methods: {
    ...mapActions(["add_article", "get_usernames", "sendMessage", "getMessages", "checkMessages"]),
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    getUsernames() {
      this.get_usernames();
    },
    get_messages(){
      this.getMessages();
    },
    check_messages(){
        this.checkMessages();
    },
    start_message_control_service(){
      var timerId = setTimeout(this.check_messages(), 2000);
    },
    send_message(message_to, message_text, chat_id = null){
      let new_message = {
        from: this.me.id,
        to: message_to,
        chat: chat_id, 
        text: message_text,
      }
    this.sendMessage(new_message)
    },
    get_username_by_id(id){
      console.log(this.users[id]);
      return this.users.id;
    }
  },
  computed: {
    ...mapState({
      chats: state => state.chat.chats,
      members: state => state.chat.members,
      users: state => state.chat.users,
      messages: state => state.chat.messages,
      me: state => state.chat.me,
      me_avatar: state => state.users.avatar,
      count: state => state.chat.count,
    })
  },
  created(){
    this.getUsernames();
    this.get_messages();
    this.check_messages();
  },
  data() {
    return {
      selected_chat_id: -1,
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
