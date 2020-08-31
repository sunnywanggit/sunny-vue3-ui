<template>
    <div>
        <h2 class="margin20">Dialog 对话框</h2>
        <h3 class="margin15">概述</h3>
        <section class="margin10">

            <p class="text">Dialog对话框，在浮层中显示，引导用户进行相关操作，提供了两种用法，普通组件使用和封装好的简洁实例调用。</p>
        </section>
        <h3 class="margin15">普通组件使用方法</h3>
        <section class="card">
            <SunnyDialog
                    :visible="visible"
                    @update:visible="visible = $event"
                    :close-on-click-overlay="closeOnClickOverlay"
                    :ok="handleOk"
                    :cancel="handleCancel"
            >
                <template v-slot:title>
                    <span>this is title</span>
                </template>
                <template  v-slot:content>
                    <div>
                        this is content
                        this is content
                    </div>
                </template>
            </SunnyDialog>
            <Button @click="handleToggle">显示对话框</Button>
            <h4 class="margin10">基础用法</h4>
            <p class="text">最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。
                需要将visible设置.sync实现数据的双向绑定，否则在改变状态时，使用者的数据并没有变化。</p>

        </section>
        <h3 class="margin15">实例化使用方法</h3>
        <section class="card">
            <p class="text">除了上述通过标准组件的使用方法，我还封装了一些实例方法，用来创建一次性的轻量级对话框。</p>
            <p class="text">实例以隐式创建 Vue 组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。</p>

        </section>
    </div>
</template>

<script>

    import {ref} from 'vue'
    import SunnyDialog from "../lib/SunnyDialog/SunnyDialog.vue";
    import Button from "../lib/Button/Button.vue";
    import {openDialog} from "../lib/SunnyDialog/openDialog";
    export default {
        components: {Button, SunnyDialog},
        setup(){
            let visible = ref(false);
            let closeOnClickOverlay = ref(true)
            const handleToggle=()=>{
                visible.value = !visible.value;
            }
            const handleOk = ()=>{
                console.log('ok');
                return true;
            }
            const handleCancel = ()=>{
                console.log('cancel');
            }
            const showDialog=()=>{
                openDialog({
                    title:'标题',
                    content:'内容部分',
                    ok(){
                        console.log('ok')
                    },
                    cancel(){
                        console.log('cancel');
                    }
                })
            }

            return {visible,
                handleToggle,
                showDialog,
                closeOnClickOverlay,handleOk,handleCancel}
        }
    }
</script>

<style scoped>

</style>