<template>
    <div @input="handleValidate">
        <label v-if="label">{{label}}</label>
        <slot></slot>
    </div>
</template>

<script>
    import {onMounted,inject} from 'vue'
    export default {
        name:'SunnyFormItem',
        props:{
            label:String,//标签
            prop:String  //当前校验哪一个属性
        },
        setup(props,context){
            const sunnyform = inject('sunnyform')

            const handleValidate=()=>{
                console.log('inject',sunnyform);
            }

            return {handleValidate}
        },
    }
</script>

<style scoped>

</style>