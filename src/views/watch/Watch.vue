<template>
  <div>
    <h1>Watch, watchEffectの使い方</h1>
    <h2>watch</h2>
    <p>第一引数に変数を入れることができ、</p>
    <p>変数の値の更新があると、メソッドを呼び出すことができる。</p>
    <p>また、更新前の値も確認できる。(consoleで確認)</p>
    <button v-on:click="onClick">countプラス</button>
    <p>countの値: {{ count }}</p>
    <p>{{ text }}</p>
    <hr>
    <h1>watchEffect</h1>
    <p>Watchの下位互換。更新を明示できない。</p>
    <p>マウント時に何かメソッドを呼びたいときなどに使える。</p>
    <p>useEffect( () => {} )</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    let count = ref(0);
    let text = ref("");
    const onClick = () => {
      count.value++;
    }
    //第一引数はオブジェクトである必要がある。
    watch(count, (_, prevCount) => {
      console.log("countされる前の値: ", prevCount);
      text.value = "watchが呼び出されました!"
    })
    return { count, text, onClick };
  },
});
</script>

<style scoped></style>
