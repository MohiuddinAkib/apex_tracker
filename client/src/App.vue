<template>
  <v-app :class="{'body__bg-image': enableBodyBg}">
    <Header></Header>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-snackbar v-model="showInvalidFeedback" left :timeout="globalSnackbarTimeOut">
      {{ invalidFeedback }}
      <v-btn text color="primary" @click.native="removeInvalidFeedback">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header/Header.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "App",
  components: {
    Header
  },
  data: () => ({}),
  methods: {
    ...mapActions(["removeInvalidFeedback"])
  },
  computed: {
    ...mapGetters([
      "enableBodyBg",
      "showInvalidFeedback",
      "invalidFeedback",
      "globalSnackbarTimeOut"
    ])
  }
});
</script>

<style>
.body__bg-image {
  background-attachment: fixed;
  background: #953036 url("~@/assets/octane.png") no-repeat top center !important;
}
</style>
