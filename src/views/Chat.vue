<template>
  <div>
    <v-parallax dark :src="require('@/assets/news_header.jpg')" height="150">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Чаты</h1>
      </v-layout>
    </v-parallax>
    <v-container >
    <v-layout row justify-center style="margin-top: 40px;">
    <v-flex xs3>
      <v-card>

        <v-list subheader>
          <v-subheader>Доступные чаты</v-subheader>
        <v-divider></v-divider>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list subheader>
          <v-subheader>Previous chats</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs6 style="margin-left: 10px;">
      <v-card style="height: 450px;">
          <v-subheader>Сообщения</v-subheader>
        <v-divider></v-divider>
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
export default {
  name: "chat",
  data () {
      return {
        items: [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
        items2: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }
        ]
      }
    }
};
</script>
