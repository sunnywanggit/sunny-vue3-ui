<template>
    <div>
        <h2 class="margin20">Card 卡片</h2>
        <h3 class="margin15">概述</h3>
        <p class="text">基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。</p>
        <h3 class="margin15">代码示例</h3>
        <section class="card">
            <SunnyCard>
                <template v-slot:title>
                    title
                </template>
                <template v-slot:extra>
                    change
                </template>
                <div>
                    this is body
                </div>
            </SunnyCard>
            <h4 class="margin10">基本用法</h4>
            <p class="text">自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
        </section>
        <section class="card" >
            <SunnyCard :bordered="bordered">
                <template v-slot:title>
                    no border title
                </template>
                <div>
                    this is body
                </div>
            </SunnyCard>
            <h4 class="margin10">无边框</h4>
            <p class="text">通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。</p>
        </section>
        <section class="card" >
            <SunnyCard style="margin-bottom: 20px">
                <template v-slot:title>
                    no border title
                </template>
                <div>
                    this is body
                </div>
            </SunnyCard>
            <SunnyCard :disHover="disHover">
                <template v-slot:title>
                    no border title
                </template>
                <div>
                    this is body
                </div>
            </SunnyCard>

            <h4 class="margin10">禁用悬停阴影</h4>
            <p class="text">通过设置属性 dis-hover 来禁用鼠标悬停显示阴影的效果。</p>
        </section>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import SunnyCard from "../lib/SunnyCard/SunnyCard.vue";
    export default {
        components: {SunnyCard},
        setup(){
            const bordered = ref(false);
            const disHover = ref(true);

            return {bordered,disHover}

        }
    }
</script>

<style scoped>

</style>