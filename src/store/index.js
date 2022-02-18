import { createStore } from "vuex";

export default createStore({
  state: {
    logined: false,
  },
  mutations: {
    set(state, value) {
      state.logined = value;
    },
  },
});
