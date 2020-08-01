<template>
    <div>
        <SunnySwitch v-model:value="y" />
    </div>
</template>
<script lang="ts">
    import SunnySwitch from "../lib/Switch/Switch.vue";
    import {ref} from 'vue'
    export default {
        components: {SunnySwitch},
        setup(){
            const y = ref(true)

            return {y}
        }
    }
</script>