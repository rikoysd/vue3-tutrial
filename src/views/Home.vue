<template>
  <div class="home">
    <h1>Welcome to Vue3.0</h1>
    <p>上のリンクのページからVue3の機能を試すことができます。</p>
    <p>ブラウザ画面とviewsフォルダを確認してみてください。</p>
    <br />
    <p>全てのページでTypeScriptとCompositionAPIを用いています。</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
