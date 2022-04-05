<template>
  <div>
    <h2>reactiveの使い方</h2>
    <p>refと同じだが、reactiveは.valueを書かなくてよい</p>
    <p>ことがメリット。ただし、オブジェクトしか引数を取れない。</p>
    <button v-on:click="onClick">alert()で確認</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  //setupの中にフィールド変数もメソッドも記入。
  setup() {
    const car = ref({
      name: "CAR",
      speed: 100
    });
    //ref()...()の中はなんでもよい。
    //reactive()...()の中はオブジェクトのみ
    const taxi = reactive({
      name: "TAXI",
      speed: 50
    });
    const onClick = () => {
      alert(`car.value.nameで値をとれる: ${car.value.name}\n taxi.nameで値をとれる: ${taxi.name}`)
    }
    return { onClick };
  },
});
</script>

<style scoped></style>
