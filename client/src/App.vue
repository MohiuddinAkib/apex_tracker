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

<script lang='ts'>
import Vue from "vue";
import Header from "@/components/Header/Header.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "App",
  components: {
    Header
  },
  data: () => ({
    deferredPrompt: null
  }),
  methods: {
    ...mapActions(["removeInvalidFeedback"]),
    handleInstallPrompt(e: Event) {
      this.deferredPrompt = e as any;
      this.showInstallPromotion();
    },
    showInstallPromotion() {
      // Show the prompt
      (this.deferredPrompt as any).prompt();
      // Wait for the user to respond to the prompt
      (this.deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        this.deferredPrompt = null;
      });
    }
  },
  computed: {
    ...mapGetters([
      "enableBodyBg",
      "showInvalidFeedback",
      "invalidFeedback",
      "globalSnackbarTimeOut"
    ])
  },
  created() {
    window.addEventListener("beforeinstallprompt", this.handleInstallPrompt);
  },
  beforeDestroy() {
    window.removeEventListener("beforeinstallprompt", this.handleInstallPrompt);
  }
});
</script>

<style>
.body__bg-image {
  background-attachment: fixed;
  background: #953036 url("~@/assets/octane.png") no-repeat top center !important;
}
</style>
