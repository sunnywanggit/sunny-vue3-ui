<template>
  <div>
    <Topnav />
    <div class="banner">
      <img class="logo" src="../assets/imgs/logo.png" alt="">
      <h2 class="title">一套基于 Vue3.0+TypeScript 的前端 UI 组件库</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">快速开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "./Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.banner {
  padding-top: 50px;
  /*padding: 100px 0;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .title{
    margin: 0;
    padding: 0;
  }
  > .actions{
    padding: 20px 0;
    a {
      text-align: center;
      border: 1px solid #ccc;
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      width: $h*3;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>