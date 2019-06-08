<template>
  <div class="upload-selection p-5">
    <b-form-select v-model="selected" :options="options"></b-form-select>

    <b-form-textarea
      v-if="selected"
      v-model="text"
      class="mt-2"
      placeholder="paste your code"
      rows="4"
      max-rows="10"
    ></b-form-textarea>

    <button class="btn btn-secondary mt-3" @click="processCode">Start analyse</button>
  </div>
</template>


<script>
export default {
   data: () => ({
      options: [
         { value: null, text: 'Language' },
         { value: 'css', text: 'CSS' },
         { value: 'js', text: 'JavaScript' },
         { value: 'html', text: 'HTML' },
      ],
      selected: null,
      text: '',
      action: '/api/parse',
   }),

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

         this.$store.commit('SET_ANALYZED_REPORT', data);
      },
   },
};
</script>
<style lang="scss" scoped>
.code-selection {
}
</style>
