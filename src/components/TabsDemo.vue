<template>
  <div>
    <h2 class="margin20">Tabs 标签页</h2>
    <h3 class="margin15">概述</h3>
    <section class="margin10">
      <p class="text">选项卡切换组件,提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p>
    </section>
    <h3 class="margin15">代码示例</h3>
    <section class="card">
      <Tabs v-model:selected="x">
        <Tab title="Tab1">Content of Tab Pane 1</Tab>
        <Tab title="Tab2">Content of Tab Pane 2</Tab>
        <Tab title="Tab3">Content of Tab Pane 3</Tab>
      </Tabs>
      <h4 class="margin10">基本</h4>
      <p class="text">默认选中第一项</p>
    </section>
  </div>
</template>

<script lang="ts">

import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {ref} from 'vue'
export default {
  name:"TabsDemo",
  components: {Tab, Tabs},
  setup(){
    const x = ref('Tab1')
    return{x}
  }
}
</script>

<style lang="scss"> </style>