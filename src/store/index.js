import { createStore } from "vuex";

export default createStore({
  state: {
    username: "",
  },
  mutations: {
    set(state, value) {
      state.username = value;
    },
  },
});
