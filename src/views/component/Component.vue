<template>
  <div>
    <Text />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  Text  from "./Text.vue"
export default defineComponent({
  //importして、この部分にcomponentsと書く。
  components: {
    Text
  },
  setup() {
    
    return {  };
  },
});
</script>

<style scoped></style>
