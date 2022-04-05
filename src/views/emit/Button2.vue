<template>
  <div>
    <button v-on:click="onClick">countに1000をプラスする</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  //stringで記述する。カンマ区切りで複数セット可能。
  emits: ["plus"],
  //propsが無い場合は、第一引数は_アンダーバーを入れる。
  setup(_, context) {
    const onClick = () => {
      context.emit("plus", 1000);
    };
    return { onClick };
  },
});
</script>

<style scoped></style>
