<template>
    <input type="text" :value="value" @input="handleInput">
</template>

<script>
    export default {
        name:'SunnyInput',
        props:{
            value:String,
        },
        setup(props,context){

            const handleInput=(e)=>{
                context.emit('input',e.target.value)
                context.emit('validate')
                context.emit('input')
                //当我们拿到数据的时候，需要去通知父组件校验
                // let parent = this.$parent; //需要注意的是，这里的父亲不一定就是 sunnyFormItem
                // while (parent){
                //     let name = parent.$options.name;
                //     if(name === 'SunnyFormItem'){
                //         break;
                //     }else{
                //         parent = parent.$parent
                //     }
                // }
                // if(parent){
                //     parent.$emit('validate')
                // }
            }

            return {handleInput}
        },
    }
</script>

<style scoped>

</style>