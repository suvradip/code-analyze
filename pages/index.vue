<template>
  <div class="blocks">
    <div class="upload-block">
      <CodeSelection/>
    </div>

    <hr>

    <div v-if="report" class="result-block">
      <h5>Language: {{ language }}</h5>
      <Editor :code="report" :language="language"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CodeSelection from '~/components/CodeSelection.vue';
import Editor from '~/components/Editor.vue';

export default {
   components: {
      CodeSelection,
      Editor,
   },
   computed: {
      ...mapState(['language', 'resultCode', 'report']),
   },
};
</script>

<style lang="scss" scoped>
.blocks {
   .upload-block {
      text-align: center;
      margin-top: 15px;
   }
}
</style>


