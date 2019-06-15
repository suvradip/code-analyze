<template>
  <div class="container-fluid">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Code Analyze</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
   name: 'DefaultLayout',
   methods: {
      onLogout() {
         Cookie.remove('authToken');
         this.$store.commit('SET_AUTHENTICATED', false);
      },
   },
};
</script>


<style lang="scss" scoped>
.container {
   padding-top: 100px;
}
</style>


