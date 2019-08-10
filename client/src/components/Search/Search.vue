<template>
  <v-flex xs12 md10 class="mx-auto">
    <v-form @submit.prevent="onSubmit">
      <v-card outlined class="mx-auto my-5 card-bg pa-5">
        <v-card-title class="headline font-weight-bold">Track Player Stats</v-card-title>

        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <v-select :items="platforms" v-model.trim="platform" label="Platform" outlined></v-select>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                name="gamerTag"
                label="Gamer Tag"
                id="gamerTag"
                v-model.trim="gamerTag"
                outlined
                placeholder="Origin ID, Xbox Live gamer tag, PSN ID, etc"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-actions>
          <v-btn block color="success" type="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-flex>
</template>

<script lang="ts" src="@/components/Search/Search.ts">
</script>

<style scoped>
.card-bg.v-card {
  background-color: rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 1) !important;
  border-width: 2px !important;
}
</style>

