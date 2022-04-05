<template>
  <div>
    <h1>toRefの使い方</h1>
    <button v-on:click="onClickAlert">初期値を確認する</button>
    <br />
    <br />
    <p>num2,num4に同じ1000をセットする。consoleも確認。</p>
    <button v-on:click="onClick">1000をセット</button>
    <p>num1の値: {{ num1 }}</p>
    <p>num2の値: {{ num2 }}</p>
    <p>num3の値: {{ num3 }}</p>
    <p>num4の値: {{ num4 }}</p>
    <br />
    <p>比較のため</p>
    <p>initNumの値: {{ initNum }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive, toRefs,ref } from "vue";

//num1を１００にする関数( toRefsなし )
const counter1 = () => {
  const state1 = reactive({
    num1: 1,
    num2: 2,
  });
  //stateのnum1だけ100にする。
  return { ...state1, num1: 100 };
};
//num1を100にする関数( toRefsアリ )
const counter2 = () => {
  const state2 = reactive({
    num3: 1,
    num4: 2,
  });
  //stateのnum3だけ100にする。
  return toRefs({ ...state2, num3: 100 });
};

export default defineComponent({
  setup() {
    //比較のために通常通りrefをつけたものも表示する。
    let initNum = ref(0)
    //JavaScriptの分割代入
    let { num1, num2 } = counter1();
    let { num3, num4 } = counter2();

    const onClickAlert = () => {
      //toRefsをつけると全てrefがつく。valueが必要になる。
      alert(
        `num1の値: ${num1}, num2の値: ${num2}, num1の値: ${num3.value}, num1の値: ${num4.value}`
      );
    };

    const onClick = () => {
      console.log("クリック")
      num2 = 1000;
      //toRefsの場合、値の更新はvalueが必要になる。つまりrefがついていることがわかる。
      num4.value = 1000;
      initNum.value = 1000;
      console.log("num2の値: ", num2);
      console.log("num4の値: ",num4.value);
      console.log("initNumの値: ",initNum.value);
    }
    return { onClickAlert, onClick, num1, num2, num3, num4, initNum  };
  },
});
</script>

<style scoped></style>
