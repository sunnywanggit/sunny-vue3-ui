<template>
  <div class="topnav">
    <div class="logo"><a href="">SVUI</a></div>
    <ol class="menu">
      <li><a href="">SRUI组件库</a></li>
      <li><a href="">SMUI组件库</a></li>
      <li><a href="https://github.com/sunnywanggit/sunny-vue3-ui">github</a></li>
    </ol>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped> @import "./Topnav.scss"; </style>