<template>
  <div>
    <p>public/index.html にappとは別のIDのHTMLタグを用意する。</p>
    <p>今回はid="teleport"のタグを用意した。</p>
    <p>appよりも先にレンダリングされるため、画面上部に出る。</p>
    <teleport to="#teleport">
      <h1>Teleportタグの中</h1>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
