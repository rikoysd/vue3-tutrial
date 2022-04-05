<template>
  <div>
    <h1>computedの挙動</h1>
    <div>
      <button v-on:click="plus">countをプラスする</button>
    </div>
    <p>countの値: {{ count }}</p>
    <p>doubleの値(computedアリ): {{ double }}</p>
    <p>consoleで更新を確認。</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    let count = ref(1);

    const plus = () => {
      count.value++
    }
    //関数を全体を()で囲うようにする.
    const double = computed(() => {
      console.log("更新");
      return count.value * 2
    });
    return { count, plus, double };
  },
});
</script>

<style scoped></style>
