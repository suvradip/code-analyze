<template>
  <div class="code-container">
    <Prism inline :code="result"/>
  </div>
</template>

<script>
import 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/themes/prism-okaidia.css';
import Prism from 'vue-prism-component';

export default {
   components: {
      Prism,
   },

   props: {
      report: {
         type: Array,
         default: () => [],
      },
   },

   computed: {
      result() {
         let temp = '';
         this.report.forEach(b => {
            if (!b.line) {
               temp += `${b.message}\n`;
            } else {
               temp += `Line: ${b.line} - ${b.message}\n`;
            }
         });

         return temp;
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


