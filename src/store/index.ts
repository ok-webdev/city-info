import Vue from 'vue';
import Vuex from 'vuex';
import City from '../types/cities';

Vue.use(Vuex);

const errorText = 'Something was wrong. Try to search again.';

export default new Vuex.Store({
  state: {
    cities: null,
    error: null,
    theme: 'light',
  },
  getters: {
    citiesList(state): City[] | null {
      return state.cities;
    },
    error(state):string|null {
      return state.error;
    },
    theme(state):string {
      return state.theme;
    },
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities;
    },
    setError(state, payload) {
      state.error = payload.error;
    },
    toggleTheme(state, payload) {
      if (payload.theme) {
        state.theme = 'dark';
      } else {
        state.theme = 'light';
      }
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
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
            error: errorText,
          });
        } else {
          context.commit('setError', { error: null });
          context.commit('setCities', { cities: data });
        }
      } catch (err: unknown) {
        context.commit('setError', {
          error: errorText,
        });
      }
    },
  },
});
