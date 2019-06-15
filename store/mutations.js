import Vue from 'vue';

export default {
   SET_LANGUAGE: (state, data) => {
      Vue.set(state, 'language', data);
   },

   SET_ANALYZED_REPORT: (state, data) => {
      Vue.set(state, 'report', data);
   },

   SET_AUTHENTICATED: (state, data) => {
      Vue.set(state, 'isAuthenticated', !!data);
   },

   SET_AUTH_TOKEN: (state, data) => {
      Vue.set(state, 'authToken', data);
   },
};
