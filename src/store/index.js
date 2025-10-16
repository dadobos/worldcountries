import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);

const state = {
  countries: []
};

const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});