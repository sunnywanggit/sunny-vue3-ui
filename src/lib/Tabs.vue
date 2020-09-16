<template>
  <div>
    Tabs 组件
    <!--    使用componet实现插槽（为了后续实现嵌套插槽做准备）-->
    <component v-for="component in defaults" :is="component"/>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  name:"Tabs",
  setup(props,context){
    const  defaults = context.slots.default();

    //判断子组件类型
    defaults.forEach((item)=>{
      if(item.type !== Tab){
        //这里一旦报错了，下面的代码就不会执行了
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })

    //获取子组件的title属性
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })


    return {
      defaults
    }
  }

}
</script>

<style scoped>

</style>