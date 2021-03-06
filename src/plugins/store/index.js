import Vue from "vue"
import Vuex from "vuex"
import createPersistedstate from "vuex-persistedstate"
import lesson from "./modules/lesson"
import task from "./modules/task"
import history from "./modules/history"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { lesson, task, history },
  plugins: [
    createPersistedstate({
      paths: ["lesson.score", "lesson.library", "lesson.scoreChallenges", "history.items"]
    }),
    createPersistedstate({
      storage: sessionStorage,
      paths: ["task.playground", "task.playgroundChallenges"]
    })
  ],
  strict: process.env.NODE_ENV !== 'production'
});