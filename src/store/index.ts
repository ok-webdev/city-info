import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: null,
    error: null,
  },
  getters: {
    citiesList(state) {
      return state.cities;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities;
    },
    setError(state, payload) {
      state.error = payload.error;
    },
  },
  actions: {
    async getCities(context, payload) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/capital/${payload.city}`
        );
        const data = await response.json();
        if (data.status || data.message) {
          context.commit('setCities', { cities: null });
          context.commit('setError', {
            error: 'Something was wrong. Try search again.',
          });
        } else {
          context.commit('setError', { error: null });
          context.commit('setCities', { cities: data });
        }
      } catch (err: unknown) {
        context.commit('setError', {
          error: 'Something was wrong. Try search again.',
        });
      }
    },
    resetError(context) {
      context.commit('setError', { error: null });
    },
  },
});
