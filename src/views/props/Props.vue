<template>
  <div>
    <children v-bind:word="word"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Children from "./Children.vue";
export default defineComponent({
  components: {
    Children
  },
  setup() {
    const word = ref("WORD");
    return { word };
  },
});
</script>

<style scoped></style>
