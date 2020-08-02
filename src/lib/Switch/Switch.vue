<template>
    <button class="sui-switch" :class="{checked:value}" :style="wrapperStyle" @click="toggle" >
        <span class="sui-switch-core" :style="innerStyle">{{text&&text}}</span>
    </button>
</template>

<script lang="ts">
    import {ref,computed} from 'vue'

    export default {
        name:'SunnySwitch',
        props:{
            value:Boolean,
            size:String,
            text:String
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
                    `height:20px;width:20px;border-radius:8px`
            })

            return {toggle,wrapperStyle,innerStyle}
        }


    }
</script>

<style scoped lang="scss">
    $wrapperHeight: 24px;
    $innerHeight: $wrapperHeight - 4px;
    .sui-switch{
        height: $wrapperHeight;
        width: $wrapperHeight*2;
        border: none;
        background:#CCCCCC;
        border-radius: $wrapperHeight/2;
        position: relative;
        & > &-core{
            position: absolute;
            top: 10%;
            left: 6%;
            height: $innerHeight;
            width: $innerHeight;
            background:white;
            border-radius: $innerHeight / 2;
            transition: left 250ms;
        }
        &.checked{
            background-color: #009BFF;
        }
        &.checked > &-core{
            left: 54%;

        }
        &:focus{
            //消除button的外边框
            outline: none;
        }
    }

</style>