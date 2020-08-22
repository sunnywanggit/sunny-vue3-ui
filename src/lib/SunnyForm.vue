<template>
    <form @submit.prevent>
        <slot></slot>
    </form>
</template>

<script>
    import {provide} from 'vue';
    export default {
        name:"SunnyForm",
        props:{
            model:{
                type:Object,
                default:()=>({})//保证组件之间的数据是独立的
            },
            rules:Object
        },
        setup(props){
            provide('sunnyform',props)
            const validate=()=>{
                //查看一下所有的 from item 是否符合规范
                //调用一下所有 form item 中的 validate 方法，看是否通过就可以了


            }
        }
    }
</script>

<style scoped>

</style>