<template>
  <div class="code-container">
    <Prism inline :language="language" :code="code"/>
  </div>
</template>

<script>
import Prism from 'vue-prism-component';

export default {
   components: {
      Prism,
   },

   props: {
      code: {
         type: String,
         required: true,
      },
      language: {
         type: String,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.code-container {
   padding: 10px;
   background-color: #272821;
}
</style>


