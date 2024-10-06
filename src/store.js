import { createStore } from 'vuex';

const persistState = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('user', JSON.stringify(state.user));
  });
};

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null, 
    isLoading: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
    clearUser({ commit }) {
      commit('CLEAR_USER');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    },
  },
  plugins: [persistState], 
});
