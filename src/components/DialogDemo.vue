<template>
    <SunnyDialog
            :visible="visible"
            @update:visible="visible = $event"
            :close-on-click-overlay="closeOnClickOverlay"
            :ok="handleOk"
            :cancel="handleCancel"
    >
        <template v-slot:title>
            <span>thsi is title</span>
        </template>
        <template  v-slot:content>
            <div>
                this is content
                this is content
            </div>
        </template>
    </SunnyDialog>
    <Button @click="handleToggle">toggle</Button>
    {{visible}}

</template>

<script>

    import {ref} from 'vue'
    import SunnyDialog from "../lib/SunnyDialog/SunnyDialog.vue";
    import Button from "../lib/Button/Button.vue";
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

            return {visible,handleToggle,closeOnClickOverlay,handleOk,handleCancel}
        }
    }
</script>

<style scoped>

</style>