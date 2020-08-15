<template>
    <div>
        <Button @click="onClick">你好</Button>
    </div>
</template>

<script>
  import Button from "../lib/Button/Button.vue";
  export default {
    name:'ButtonDemo',
      components: {Button},
      setup(){
        const onClick=()=>{
            console.log('hi');
        }
        return {onClick}
      }
  }
</script>