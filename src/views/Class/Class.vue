<template>
  <div>
    <h1>動的にclassをコントロールする方法</h1>
    <p>v-bind:class="{ active: isActive }"</p>
    <button v-on:click="onClick">Pop Up ボタン</button>
    <div v-bind:class="{ active: isActive }" v-show="isActive">
      <span>Pop Up!</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    let isActive = ref(false);
    const onClick = ():void => {
      isActive.value = !isActive.value
    }
    return { isActive, onClick };
  },
});
</script>

<style scoped>
.active {
  width: 200px;
  height: 200px;
  background-color: lightgreen;
  text-align: center;
  margin: 50px auto;
}
</style>
