<template>
  <v-container>
    <v-layout row wrap>
      <Search />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search/Search.vue";

export default Vue.extend({
  components: {
    Search
  },
  methods: {}
});
</script>
