import Vue from "vue";
import Vuex from "vuex";
// import createPersistedstate from "vuex-persistedstate";
import todoModule from "./modules/todoModule";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoModule,
  },
  // plugins: [createPersistedstate()],
});
