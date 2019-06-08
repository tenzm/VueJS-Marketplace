<template>
  <div>
    <v-parallax dark :src="require('@/assets/news_header.jpg')" style="z-index:-1; position:relative;" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3"><b>RealTime</b> Чат 🔥</h1>
      </v-layout>
    </v-parallax>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 class="clearfix" style="text-align: center; margin-top: 50px; display: inherit; 
    margin-left: 0;">
        <v-card style="width: 12vw; 
    height: 510px;" class="chat">
          <!-- Adaptability will be made in the future -->
          <v-list subheader>
            <v-subheader>Чат</v-subheader>
            <v-divider></v-divider>
            <v-list-tile
              v-for="(user, key) in users"
              :key="key"
              @click="change_selected_id(key)"
            >
              <v-avatar :size="40" style="margin-right:10px;">
                <img :src="user.avatar"  spect-ratio="1" height="40" >
              </v-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="user.username"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>
        </v-card>
        
        <v-flex xs4 style="margin-left: 10px; 
    min-width: 100%; ">
          
          <v-card style="height: 450px;">
            <v-subheader v-if="selected_chat_id != '-1'"><b >{{users[selected_chat_id].username}}</b></v-subheader>
            <v-subheader v-else>Выберите пользователя:</v-subheader>
            <v-divider></v-divider>
            <div class="scroll-y" style="height: 89%; text-align: left; overflow-x: hidden;" ref="messages_panel" id = "messages_panel"  v-chat-scroll>
              <div
                v-for="(message, key) in messages"
                :key="key"
              >
              <div v-if="message.to == selected_chat_id || message.from == selected_chat_id" style="    
">
                <div v-if="message.from == me.id" style="margin-top:10px; margin-bottom: 10px; 
    padding-left: 30%; width: 100%; text-align: right; float:right;">
    <div style="float:right; width: 100%;">
                <span
                  style="margin-right:10px; font-size:14px; font-weight: bold; "
                >
                {{ me.username }}</span>
                <v-avatar :size="40" style="margin-right: 10px;">
                  <v-img :src="me_avatar" spect-ratio="1" height="40" ></v-img>
                </v-avatar>
                </div>
                <v-hover>
                  <v-card
                    style="width: max-content; margin-top: -5px; 
    text-align: right; border-radius: 10px 0 10px 10px; float:right;   margin-right: 60px;
    max-width: 40vw;"
                  >
                    <v-card-title><span style="width: 100%; word-wrap: break-word !important;">{{message.text}}</span></v-card-title>
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
                    style="width: max-content; margin-top: -5px; margin-left:45px; border-radius: 0 10px 10px 10px; max-width: 40vw;"
                  >
                    <v-card-title><span style="width: 100%; word-wrap: break-word !important;">{{message.text}}</span></v-card-title>
                  </v-card>
                </v-hover>
              </div>
              </div>
            </div>
            </div>
          </v-card>
          <div style="margin-top: 10px;  display: flex;">
            <v-text-field
              v-model="mes_text"
              solo
              label="Сообщение"
              clearable
              style="float:left;"
            ></v-text-field>
            <v-btn flat icon color="#212121" @click="send_message(selected_chat_id, mes_text)" style="float:right;">
              <v-icon>send</v-icon>
            </v-btn>
          </div>
        </v-flex>
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
    change_selected_id(id){
      this.selected_chat_id = id; 
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
  beforeMount(){
    this.getUsernames();
    this.get_messages();
    this.check_messages();
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
  data() {
    return {
      selected_chat_id: '-1',
    };
  }
};
</script>
<style>
@media screen and (max-width: 1040px) {
.chat .v-list__tile {
    padding: 4px 3px;
    text-align: center;
    display: block;
}
.chat .v-list__tile__content {
    visibility: hidden;
    width: 0;
}
.chat .v-list__tile__title {
    width: 0;
}
.chat .v-avatar {
    margin: 0 !important;
}
}

@media screen and (max-width: 425px) {
  .chat .v-avatar{
    height: 25px !important;
    width: 25px !important;
  }
  .chat .v-list__tile {
    padding: 12px 3px;
    text-align: center;
    display: block;
}
.v-subheader {
    display: inline-grid;
    text-align: center;
    padding: 0;
}
}

</style>