import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
  },
  mutations: {
    addTodo(state) {
      state.login = false;
    },
    removeTodo(state) {
      state.login = true;
    },
  },
});
