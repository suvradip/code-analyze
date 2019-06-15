<template>
  <div class="blocks">
    <div class="upload-block">
      <CodeSelection/>
    </div>

    <hr>

    <div v-if="report" class="result-block">
      <h5>Language: {{ language }}</h5>
      <Result :report="report" :language="language"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CodeSelection from '~/components/CodeSelection.vue';
import Result from '~/components/Result.vue';

export default {
   components: {
      CodeSelection,
      Result,
   },
   computed: {
      ...mapState(['language', 'resultCode', 'report']),
   },
   middleware: 'authenticated',
};
</script>



