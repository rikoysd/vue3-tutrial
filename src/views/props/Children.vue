<template>
  <div>
    <h4>propsで渡される文字が入ります:  {{ word }}</h4>
    <h4>setup関数内でpropsを利用した文字が入ります:  {{ updateWord }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  //propsの型の指定方法とpropsの受け取り方法
  props: {
    word: {
      //falseにすると、親コンポーネントから渡さなくてもよい状態になる。
      required: true,
      //typeで指定できる型は大文字。'S'tring。引用サイト: https://prograshi.com/language/vue-js/validators-for-props/
      type: String as PropType<string>
    }
  },
  //引数にpropsを書く。setup関数内で上記の型推論がつく。
  setup(props) {
    const updateWord = ref(props.word + "アップデート！");
    //propsで渡されたものは自動的にreturnされる。(wordは書かなくてよい。)
    return { updateWord };
  },
});
</script>

<style scoped></style>
