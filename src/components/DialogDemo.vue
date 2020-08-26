<template>
    <SunnyDialog :visible="visible" @update:visible="visible = $event"/>
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
            const handleToggle=()=>{
                visible.value = !visible.value;
            }
            return {visible,handleToggle}
        }
    }
</script>

<style scoped>

</style>