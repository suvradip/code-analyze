<template>
  <form class="form-signin">
    <h1 class="h4 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputUserName" class="sr-only">Email address</label>
    <input
      id="inputUserName"
      v-model="form.username"
      type="text"
      class="form-control"
      placeholder="username"
      required
      autofocus
    >
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      id="inputPassword"
      v-model="form.password"
      type="password"
      class="form-control"
      placeholder="Password"
      required
    >
    <!-- <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>-->
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="onSubmit">Sign in</button>
    <hr>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
   components: {},
   data: () => ({
      action: 'api/authentication',
      form: {
         username: '',
         password: '',
      },
   }),
   computed: {
      ...mapState([]),
   },

   middleware: 'notAuthenticated',

   methods: {
      async onSubmit() {
         const { data } = await this.$axios.post(this.action, this.form);
         this.$store.commit('SET_AUTHENTICATED', data.success);
         if (data.success) {
            this.$router.push('/');
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.form-signin {
   width: 100%;
   max-width: 330px;
   padding: 15px;
   margin: 0 auto;

   .checkbox {
      font-weight: 400;
   }
   .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 16px;
      &:focus {
         z-index: 2;
      }
   }

   input[type='email'] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
   }
   input[type='password'] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
   }
}
</style>



