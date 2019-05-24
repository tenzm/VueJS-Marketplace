<template>
  <div>
    <layout></layout>
  </div>
</template>

<script>
import Layout from "@/views/Layout";
import api from "@/api";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: { Layout },
  methods: {
    ...mapActions(["authorize"]),
    check_authorization: function(is_auth) {
      this.authorize(is_auth);
    }
  },
  beforeCreate(){
    api.axios.post(api.urls["check"]).then(res=>{
        this.check_authorization(res.data);
      });
  },
  data: () => ({})
};
</script>
