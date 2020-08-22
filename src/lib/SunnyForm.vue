<template>
    <form>
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

            }
        }
    }
</script>

<style scoped>

</style>