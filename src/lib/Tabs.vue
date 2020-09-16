<template>
  <div class="sui-tabs">

    <div class="sui-tabs-nav" ref="container">
      <div class="sui-tabs-nav-item"
           v-for="(title,index) in titles"
           :class="{selected:title === selected}"
           @click="select(title)"
           :ref="el => { if (title === selected) selectedItem = el }"
           :key="index">
        {{title}}
      </div>
      <div class="sui-tabs-nav-indicator" ref="indicator"> </div>
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
import {ref,onMounted,onUpdated} from 'vue'
export default {
  name:"Tabs",
  props:{
    selected: String
  },
  setup(props,context){
    const  defaults = context.slots.default();

    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    const x = ()=>{
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';

      const {left:left1} = container.value.getBoundingClientRect()
      const {left:left2} = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    }

    //TODO 这部分内容可以使用 watchEffect 进行优化
    //挂在完成之后执行
    onMounted(x)//注意：只在第一次渲染执行
    onUpdated(x)
    // watchEffect(x),
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
      selectedItem,
      indicator,
      container,
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
      position: relative;
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
    &-indicator{
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
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