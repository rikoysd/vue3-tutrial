<template>
  <h4>以前はtemplateタグの中は一つのブロック要素で囲う必要があったが、</h4>
  <h4>Vue3から、その必要は無くなった。</h4>
  <header>
    <span>header</span>
  </header>
  <body>
    <span>body</span>
  </body>
  <footer>
    <span>footer</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    
    return {  };
  },
});
</script>

<style scoped></style>
