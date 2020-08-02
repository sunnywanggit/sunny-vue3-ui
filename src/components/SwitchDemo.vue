<template>
    <div>
        <h2 class="margin20">Switch 开关</h2>
        <h3 class="margin15">概述</h3>
        <section class="margin10">
            <p class="text">在两种状态间切换时用到的开关选择器。</p>
        </section>
        <h3 class="margin15">代码示例</h3>
        <section class="card">
            <SunnySwitch v-model:value="BaseBool" />
            <h4 class="margin10">基本</h4>
            <p class="text">基本用法，状态切换时会触发事件。</p>
        </section>
        <section class="card">
            <SunnySwitch v-model:value="SizeLargeBool" size="large"/>
            <SunnySwitch v-model:value="SizeSmallBool" size="small"/>
            <h4 class="margin10">尺寸</h4>
            <p class="text">设置size为 large 或 small 使用大号和小号的开关。</p>
        </section>
        <section class="card">
            <SunnySwitch v-model:value="SizeLargeBool" size="large"/>
            <SunnySwitch v-model:value="SizeSmallBool" size="small"/>
            <h4 class="margin10">文字</h4>
            <p class="text">自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p>
        </section>
    </div>
</template>
<script lang="ts">
    import SunnySwitch from "../lib/Switch/Switch.vue";
    import {ref} from 'vue'
    export default {
        components: {SunnySwitch},
        setup(){
            const BaseBool= ref(true);
            const SizeLargeBool = ref(false)
            const SizeSmallBool = ref(false)
            return {BaseBool,SizeLargeBool,SizeSmallBool}
        }
    }
</script>