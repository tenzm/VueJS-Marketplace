<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/news_header.jpg')"
      style="z-index:-1; position:relative;"
      height="150"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Магазин</h1>
      </v-layout>
    </v-parallax>
    <v-container grid-list-xl >
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 style = "display: inline-block; text-align: center;" class="clearfix">
        <v-hover style = "
        vertical-align:top;display: inline-block; text-align: left; margin: 25px; position: relative;
			box-sizing: border-box;">
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            width="250px"
          ><router-link to="/news">
            <v-img
              :aspect-ratio="3/4"
              src="https://istoremsk.ru/image/cache/catalog/iPhone/Iphone_7/Mat/1-450x550.jpg"
            ></v-img></router-link>

            <v-card-title>
              <div>
                <div style="height: 58px;">
                <div v-if="!hover" style="height: 100%;">
                <span class="headline font-weight-thin" style="display: block;">iPhone 7</span>
                <span
                  class="info-text font-weight-light"
                  style="display: block; margin-top: 10px;"
                >Apple iPhone 7 128 ГБ</span></div>
                <div v-if="hover" style="height: 100%; float: left; width: 250px;">
                  <v-btn color="teal darken-4" style="float: left; width: 125px; height: 90%; color: white; margin-left: -16px; border-radius: 0px; z-index: 3; text-align: left;">
                    <v-icon right dark style="margin-left: 3px;">local_grocery_store</v-icon>
                  </v-btn>
                  <v-btn color="teal lighten-5" style="float: left; width: 125px; height: 90%; color: black; margin-left: -8px; border-radius: 0px; z-index: 3; text-align: center;">
                    <v-icon right dark style="margin-left: 3px;">add</v-icon>
                  </v-btn>
                </div>

              </div>
                <span
                  class="headline font-weight-light"
                  style="display: block; margin-top: 10px;"
                >39 990 ₽</span>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
        <v-hover style = "
        vertical-align:top;display: inline-block; text-align: left; margin: 25px; position: relative;
			box-sizing: border-box;">
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            width="250px"
          ><router-link to="/news">
            <v-img
              :aspect-ratio="3/4"
              src="https://istoremsk.ru/image/cache/catalog/iPhone/Iphone_7/Mat/1-450x550.jpg"
            ></v-img></router-link>

            <v-card-title>
              <div>
                <div style="height: 58px;">
                <div v-if="!hover" style="height: 100%;">
                <span class="headline font-weight-thin" style="display: block;">iPhone 7</span>
                <span
                  class="info-text font-weight-light"
                  style="display: block; margin-top: 10px;"
                >Apple iPhone 7 128 ГБ</span></div>
                <div v-if="hover" style="height: 100%; float: left; width: 250px;">
                  <v-btn color="teal darken-4" style="float: left; width: 125px; height: 90%; color: white; margin-left: -16px; border-radius: 0px; z-index: 3; text-align: left;">
                    <v-icon right dark style="margin-left: 3px;">local_grocery_store</v-icon>
                  </v-btn>
                  <v-btn color="teal lighten-5" style="float: left; width: 125px; height: 90%; color: black; margin-left: -8px; border-radius: 0px; z-index: 3; text-align: center;">
                    <v-icon right dark style="margin-left: 3px;">add</v-icon>
                  </v-btn>
                </div>

              </div>
                <span
                  class="headline font-weight-light"
                  style="display: block; margin-top: 10px;"
                >39 990 ₽</span>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
        <v-hover style = "
        vertical-align:top;display: inline-block; text-align: left; margin: 25px; position: relative;
			box-sizing: border-box;">
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            width="250px"
          ><router-link to="/news">
            <v-img
              :aspect-ratio="3/4"
              src="https://istoremsk.ru/image/cache/catalog/iPhone/Iphone_7/Mat/1-450x550.jpg"
            ></v-img></router-link>

            <v-card-title>
              <div>
                <div style="height: 58px;">
                <div v-if="!hover" style="height: 100%;">
                <span class="headline font-weight-thin" style="display: block;">iPhone 7</span>
                <span
                  class="info-text font-weight-light"
                  style="display: block; margin-top: 10px;"
                >Apple iPhone 7 128 ГБ</span></div>
                <div v-if="hover" style="height: 100%; float: left; width: 250px;">
                  <v-btn color="teal darken-4" style="float: left; width: 125px; height: 90%; color: white; margin-left: -16px; border-radius: 0px; z-index: 3; text-align: left;">
                    <v-icon right dark style="margin-left: 3px;">local_grocery_store</v-icon>
                  </v-btn>
                  <v-btn color="teal lighten-5" style="float: left; width: 125px; height: 90%; color: black; margin-left: -8px; border-radius: 0px; z-index: 3; text-align: center;">
                    <v-icon right dark style="margin-left: 3px;">add</v-icon>
                  </v-btn>
                </div>

              </div>
                <span
                  class="headline font-weight-light"
                  style="display: block; margin-top: 10px;"
                >39 990 ₽</span>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "shop"
};
</script>

<style>
.info-text {
  font-size: 16px !important;
  font-weight: 500;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
  font-family: "Roboto", sans-serif !important;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>