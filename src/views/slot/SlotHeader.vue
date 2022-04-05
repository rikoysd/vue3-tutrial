<template>
  <div>
    <slot></slot>
  </div>
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
