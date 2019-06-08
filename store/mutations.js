import Vue from 'vue';

export default {
   SET_LANGUAGE: (state, data) => {
      Vue.set(state, 'language', data);
   },

   SET_ANALYZED_REPORT: (state, data) => {
      Vue.set(state, 'report', data);
   },
};
