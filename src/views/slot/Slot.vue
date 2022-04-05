<template>
  <div>
    <h1>slotの使い方</h1>
    <p>ボタンの中の文字が子コンポーネントに渡される。</p>
    <SlotComp>Childrenボタン</SlotComp>
  </div>
  <br />
  <p>headerをまとめる</p>
  <SlotHeader>
    <h1>タイトル</h1>
    <h2>見出し１</h2>
  </SlotHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SlotComp from "./SlotComp.vue"
import SlotHeader from "./SlotHeader.vue"
export default defineComponent({
  components: {
    SlotComp,
    SlotHeader
  },
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    
    return {  };
  },
});
</script>

<style scoped></style>
