const cookieparser = process.server ? require('cookieparser') : undefined;

export default {
   async nuxtServerInit({ commit }, { req }) {
      if (req.headers.cookie) {
         const parsed = cookieparser.parse(req.headers.cookie);
         if (parsed.authToken) {
            const { data } = await this.$axios.post('/api/verify');
            commit('SET_AUTHENTICATED', data.success);
         } else {
            commit('SET_AUTHENTICATED', false);
         }
      }
   },
};
