<template>
  <div>
    Tabs 组件
    <component :is="defaults[0]"/>
    <component :is="defaults[1]"/>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  name:"Tabs",
  setup(props,context){
    const  defaults = context.slots.default();
    //判断子组件类型是否正确，通过检查 defaults 的 type 来检查是不是我们要的组件类型
    console.log(defaults[0].type === Tab);
    return {
      defaults
    }
  }

}
</script>

<style scoped>

</style>