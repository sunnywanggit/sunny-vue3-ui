<template>
  <div class="sui-tabs">

    <div class="sui-tabs-nav">
      <div class="sui-tabs-nav-item"
           v-for="(title,index) in titles"
           :class="{selected:title === selected}"
           :key="index">{{title}}</div>
    </div>

    <div class="sui-tabs-content">
      <!--    使用componet实现插槽（为了后续实现嵌套插槽做准备）-->
      <component v-for="(component,index) in defaults" :is="component" :key="index"/>
    </div>

  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  name:"Tabs",
  props:{
    selected: String
  },
  setup(props,context){
    const  defaults = context.slots.default();
    console.log('props',props);

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

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .sui-tabs {
    &-nav {
       display: flex;
       color: $color;
       border-bottom: 1px solid $border-color;
    &-item {
       padding: 8px 0;
       margin: 0 16px;
       cursor: pointer;
      &:first-child {
         margin-left: 0;
       }
      &.selected {
         color: $blue;
       }
    }
  }
  &-content {
     padding: 8px 0;
   }
  }
</style>