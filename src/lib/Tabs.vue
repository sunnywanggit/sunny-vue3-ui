<template>
  <div class="sui-tabs">

    <div class="sui-tabs-nav">
      <div class="sui-tabs-nav-item"
           v-for="(title,index) in titles"
           :class="{selected:title === selected}"
           @click="select(title)"
           :key="index">{{title}}</div>
    </div>

    <div class="sui-tabs-content">
      <!--    使用componet实现插槽（为了后续实现嵌套插槽做准备）-->
      <component v-for="(component,index) in defaults" :is="component"
                 :key="index"
                 class="sui-tabs-content-item"
                 :class="{selected:component.props.title === selected}" />
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

    const select = (title:string)=>{
      context.emit('update:selected',title)
    }

    return {
      defaults,
      titles,
      select
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
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
   }
  }
</style>