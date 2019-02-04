import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: ""
  },
  getters: {
    GET_USER(state) {
      return state.name;
    }
  },
  mutations: {
    SET_UESR(state, data) {
      state.name = data;
    }
  },
  actions: {}
});
