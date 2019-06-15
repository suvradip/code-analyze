<template>
  <div class="upload-selection p-5">
    <p class="language-select">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </p>

    <no-ssr v-if="selected" placeholder="Codemirror Loading...">
      <codemirror v-model="text" :options="cmOptions"></codemirror>
      <button class="btn btn-secondary mt-3" @click="processCode">Start analyse</button>
    </no-ssr>
  </div>
</template>


<script>
export default {
   data: () => ({
      options: [
         { value: null, text: 'Language' },
         { value: 'css', text: 'CSS' },
         { value: 'html', text: 'HTML' },
      ],
      selected: null,
      text: 'hello',
      action: '/api/parse',
      cmOptions: {
         tabSize: 4,
         foldGutter: true,
         styleActiveLine: true,
         lineNumbers: true,
         line: true,
         keyMap: 'sublime',
         mode: 'text/css',
         theme: 'base16-dark',
      },
   }),

   computed: {
      codemirror() {
         return this.$refs.myCm.codemirror;
      },
   },

   watch: {
      selected() {
         if (!this.selected) {
            this.text = '';
         } else {
            this.$store.commit('SET_LANGUAGE', this.selected);
         }
      },
   },

   methods: {
      async processCode() {
         if (this.text.length === 0) return;

         const { data } = await this.$axios.post(this.action, {
            code: this.text.trim(),
            language: this.selected,
         });

         this.$store.commit('SET_ANALYZED_REPORT', data.result);
      },
   },
};
</script>

<style lang="scss" scoped>
.upload-selection {
   .language-select {
      width: 150px;
      margin: 0 auto;
   }
   .vue-codemirror {
      padding-top: 30px;
   }
}
</style>


