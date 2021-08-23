import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const todolist = JSON.parse(localStorage.getItem("todolist")) || [];
    return todolist;
  },
};
export const store = new Vuex.Store({
  state: {
    header: "Todo",
    todoList: storage.fetch(),
  },
  getters: {},
});
