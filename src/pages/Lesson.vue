<template>
  <v-card>
    <v-app-bar app flat fixed color="blue" dark>
      <v-btn icon @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> {{ data.name }} </v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-skeleton-loader type="card-avatar, article" v-if="loading" />
          <v-card v-else class="mx-auto border-0 d-flex flex-wrap" outlined>
            <v-col cols="12" md="6" class="p-0">
              <v-img width="100%" :src="data.image" />
            </v-col>
            <v-col cols="12" md="6" class="p-0">
              <v-card-title> {{ data.name }} </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                  <div class="grey--text ml-4">
                    4.5 (413)
                  </div>
                </v-row>
                <div> {{ data.description }} </div>
              </v-card-text>
              <v-card-text>
                <v-list three-line>
                  <v-divider inset></v-divider>
                  <v-list-item v-if="!itInLibrary">
                    <v-list-item-avatar>
                      <v-icon> mdi-cart </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title> Thêm khóa học vào thư viện </v-list-item-title>
                      <v-list-item-subtitle> giảm quảng cáo và không giới hạn </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="pushLessonToLibrary">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider inset v-if="!itInLibrary || !itInChallenges" />
                  <v-list-item v-if="infoInLocal">
                    <v-list-item-avatar>
                      <v-icon> mdi-star </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title> Bạn làm tốt lắm </v-list-item-title>
                      <v-list-item-subtitle>
                        <div class="d-flex align-center">
                          <v-progress-circular :rotate="-90" :size="50" :width="5" :value="infoInLocal.point * 10" color="primary"> {{ infoInLocal.point * 10 }}% </v-progress-circular>
                          <p class="mx-3"> {{ infoInLocal.questionTrue }} answer / {{ infoInLocal.countQuestion }} question </p>
                        </div>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset v-if="infoInLocal"/>
                  <v-list-item v-if="itInChallenges">
                    
                    <v-list-item-avatar>
                      <v-icon> mdi-apps </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title> Bạn đã tham gia thử thách với khóa học này </v-list-item-title>
                      <v-list-item-subtitle>
                        Bạn mất khoảng {{ (itInChallenges.sumTime / 1000).toFixed(1) }} để đạt {{ itInChallenges.point }} điểm.
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-col>
          </v-card>
          <v-btn class="mx-2" fab dark color="blue" fixed bottom right :to="`${$route.path}/playground`" @click="$store.commit('addTaskToPlayground', ID)">
            <v-icon dark>
              mdi-play
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      data: {}
    }),
    methods: {
      pushLessonToLibrary() {
        this.$store.commit("pushLessonToLibrary", this.ID)
      }
    },
    computed: {
      ID() {
        return `C${this.data.classes}W${this.data.week}L${this.data.level}`
      },
      itInLibrary() {
        return this.$store.getters.itInLibrary(this.ID)
      },
      itInChallenges() {
        return this.$store.getters.getInfoLessonInChallenges(this.ID)
      },
      infoInLocal() {
        return this.$store.getters.getInfoLessonInLibrary(this.ID)
      }
    },
    beforeCreate() {
      this.loading = true
      this.$store.commit("cleanTaskInPlayground")
      fetch(`${this.$config.baseURL}/api/get-basic-subject/class/${this.$route.params.classes}/week/${this.$route.params.week}/level/${this.$route.params.level}`)
        .then(res => res.json())
        .then(json => this.data = json.data)
        .then(() => this.loading = false)
    }
  }
</script>