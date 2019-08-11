<template>
  <div>
    <v-container grid-list-xs>
      <v-layout>
        <v-flex xs12 md8 class="mx-auto">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :value="70"
              v-if="loading"
              indeterminate
              class="mx-auto"
            ></v-progress-circular>
            <template v-if="!profileData && !loading">
              <v-btn color="#903036" to="/" class="mx-auto">Go Back</v-btn>
            </template>
          </div>

          <v-card v-if="profileData && !loading" class="mx-auto my-5 card-bg pa-5">
            <v-card-title primary-title class="card__title">
              <v-avatar>
                <v-img :src="profileData.platformInfo.avatarUrl" alt="alt" />
              </v-avatar>
              <span class="ml-3">{{ profileData.platformInfo.platformUserId }}</span>
            </v-card-title>

            <v-container>
              <v-layout>
                <v-flex xs12 md4>
                  <v-img :src="profileData.segments[1].metadata.imageUrl"></v-img>
                </v-flex>
                <v-flex xs12 md8>
                  <v-list three-line>
                    <v-list-item-group>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="title">Selected Legend</v-list-item-title>
                          <v-list-item-subtitle
                            class="headline"
                            v-html="profileData.metadata.activeLegendName"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list-item v-if="profileData.segments[0].stats.season2Wins">
                        <v-list-item-content>
                          <v-list-item-title class="title">Season 2 Wins</v-list-item-title>
                          <v-list-item-subtitle class="headline">
                            {{ profileData.segments[0].stats.season2Wins.displayValue }}
                            <span
                              class="body-1"
                            >({{ profileData.segments[0].stats.season2Wins.percentile }})</span>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list-item v-if="profileData.segments[0].stats.level">
                        <v-list-item-content>
                          <v-list-item-title class="title">Apex Level</v-list-item-title>
                          <v-list-item-subtitle class="headline">
                            {{ profileData.segments[0].stats.level.displayValue }}
                            <span
                              class="body-1"
                            >({{ profileData.segments[0].stats.level.percentile }})</span>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list-item v-if="profileData.segments[0].stats.kills">
                        <v-list-item-content>
                          <v-list-item-title class="title">Lifetime Kills</v-list-item-title>
                          <v-list-item-subtitle class="headline">
                            {{ profileData.segments[0].stats.kills.displayValue }}
                            <span
                              class="body-1"
                            >({{ profileData.segments[0].stats.kills.percentile }})</span>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list-item v-if="profileData.segments[0].stats.damage">
                        <v-list-item-content>
                          <v-list-item-title class="title">Damage Done</v-list-item-title>
                          <v-list-item-subtitle class="headline">
                            {{ profileData.segments[0].stats.damage.displayValue }}
                            <span
                              class="body-1"
                            >({{ profileData.segments[0].stats.damage.percentile }})</span>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-btn outlined to="/">
                <font-awesome-icon icon="chevron-left" class="mr-3"></font-awesome-icon>
                <span>Go Back</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts" src="@/components/Profile/Profile.ts">
</script>

<style scoped>
.card-bg.v-card {
  background-color: rgba(0, 0, 0, 0.5);
}

.card__title.v-card__title {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px !important;
}
</style>