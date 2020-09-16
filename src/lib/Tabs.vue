<template>
  <div>
    <div v-for="(title,index) in titles" :key="index">{{title}}</div>
    <!--    使用componet实现插槽（为了后续实现嵌套插槽做准备）-->
    <component v-for="(component,index) in defaults" :is="component" :key="index"/>
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
      defaults,
      titles
    }
  }

}
</script>

<style scoped>

</style>