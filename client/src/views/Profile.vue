<template>
  <div>
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "@/components/Profile/Profile.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "profile-view",
  components: {
    Profile
  },
  methods: {
    ...mapActions(["getProfileData", "removeProfileData"])
  },
  created() {
    this.getProfileData({
      platform: this.$route.params.platform,
      gamerTag: this.$route.params.gamerTag
    });
  },
  beforeDestroy() {
    this.removeProfileData();
  }
});
</script>

<style scoped>
</style>