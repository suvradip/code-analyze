export default ({ store, redirect }) => {
   if (!store.state.isAuthenticated) {
      redirect('/login');
   }
};
