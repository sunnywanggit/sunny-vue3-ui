<template>
  <div class="topnav">
    <div class="logo">SVUI</div>
    <ol class="menu">
      <li>SRUI</li>
      <li>SMUI</li>
      <li>github</li>
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