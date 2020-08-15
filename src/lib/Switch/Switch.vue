<template>
    <button class="sui-switch" :class="{checked:value}" :style="wrapperStyle" @click="toggle" >
        <span class="sui-switch-core" :style="innerStyle"></span>
    </button>
</template>

<script lang="ts">
    import {ref,computed} from 'vue'

    export default {
        name:'SunnySwitch',
        props:{
            value:Boolean,
            size:String,

        },
        setup(props,context){
            const toggle=()=>{
                context.emit('update:value',!props.value)
            }

            const wrapperStyle = computed(()=>{
                return props.size === 'small' ?
                    `height:12px;width:24px;border-radius:6px`:
                    'height:24px;width:48px;border-radius:12px'
            })
            const innerStyle = computed(()=>{
                return props.size === 'small' ?
                    `height:8px;width:8px;border-radius:4px`:
                    `height:20px;width:20px;border-radius:10px`
            })

            return {toggle,wrapperStyle,innerStyle}
        }


    }
</script>

<style lang="scss"> @import "./Switch.scss"; </style>
