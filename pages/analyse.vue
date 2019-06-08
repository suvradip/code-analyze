<template>
  <div class="editor-block">
    <h5>Language: javascript</h5>
    <Editor code="alert(11)"/>
    <button class="btn btn-sm btn-primary mt-3">Start analyse</button>
  </div>
</template>

<script>
import Editor from '~/components/Editor.vue';

export default {
   components: {
      Editor,
   },
};
</script>

<style lang="scss" scoped>
.editor-block {
   margin-top: 15px;
}
</style>


