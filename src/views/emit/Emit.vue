<template>
  <div>
    <h1>Emitの使い方</h1>
    <p>countの値: {{ count }}</p>
    <Button v-on:count="onClick" />
    <br />
    <Button v-on:count="onClick" />
    <br />
    <Button v-on:count="onClick" />
    <br />
    <Button2 v-on:plus="plus" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "./Button.vue";
import Button2 from "./Button2.vue";
export default defineComponent({
  components: {
    Button,
    Button2,
  },
  setup() {
    const count = ref(0);

    const onClick = () => {
      count.value++;
    };
    //子コンポーネントから引数を渡す。
    const plus = (num: number) => {
      count.value = count.value + num;
    };
    return { count, onClick, plus };
  },
});
</script>

<style scoped></style>
