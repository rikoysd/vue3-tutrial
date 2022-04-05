<template>
  <div>
    <h4>複雑なロジックのメソッドはcomposablesフォルダで管理</h4>
    <p>全て.tsのファイルが入る。</p>
    <br />
    <p>アドレスを非同期で取得</p>
    <p>consoleで確認。</p>
    <button v-on:click="onClick">住所検索</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getAddress } from "@/composables/useZipcode"
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    let address = ref("")
    const onClick = () => {
      getAddress();
    }
    return { address, onClick};
  },
});
</script>

<style scoped></style>
