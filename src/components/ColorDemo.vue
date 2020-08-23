<template>
    <div>
        <h2 class="margin20">Color 色彩</h2>
        <h3>概述</h3>
        <p class="text">SVUI 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
        <section class="card">
            <span class="color-block-main primary">
                Primary
            </span>
            <span class="color-block-main light-primary">
            Light Primary
            </span>
            <span class="color-block-main dark-primary">
                Dark Primary
            </span>
            <h4 class="margin10">主色</h4>
            <p class="text"> 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
        </section>

        <section class="card">
            <span class="color-block-assist info">
                Info
            </span>
            <span class="color-block-assist success">
                Success
            </span>
            <span class="color-block-assist warning">
                Warning
            </span>
            <span class="color-block-assist error">
                Error
            </span>
            <h4 class="margin10">辅助色</h4>
            <p class="text">辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</p>
        </section>

        <section class="card">
            <span class="color-block-assist title">
                Title
            </span>
            <span class="color-block-assist content">
                Content
            </span>
            <span class="color-block-assist sub-color">
                Sub Color
            </span>
            <span class="color-block-assist disabled">
                Disabled
            </span>
            <br>
            <span class="color-block-assist border">
                Border
            </span>
            <span class="color-block-assist divider">
                Divider
            </span>
            <span class="color-block-assist background">
                Background
            </span>

            <h4 class="margin10">中性色</h4>
            <p class="text">中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
        </section>

    </div>
</template>

<script>
    import SunnyColor from "../lib/SunnyColor/SunnyColor.vue";
    export default {
        components: {SunnyColor}
    }
</script>

<style scoped lang="scss">
    .color-block-main{
        display: inline-block;
        margin-right: 20px;
        width:  200px;
        padding: 10px;
        height: 80px;
        background-color: red;
        overflow: hidden;
        border-radius: 10px;

        &.primary{
            background-color:  #2d8cf0;
            color: #fff;
        }
        &.light-primary{
            background-color: #5cadff;
            color: #fff;
        }
        &.dark-primary{
            background-color: #2b85e4;
            color: #fff;
        }
    }
    .color-block-assist{
        display: inline-block;
        margin-right: 20px;
        width: 145px;
        padding: 10px;
        height: 80px;
        background-color: red;
        overflow: hidden;
        border-radius: 10px;
        &.info{
            background-color: #2db7f5;
            color: #fff;
        }
        &.success{
            background-color: #19be6b;
            color: #fff;
        }
        &.warning{
            background-color: #ff9900;
            color: #fff;
        }
        &.error{
            background-color: #ed4014;
            color: #fff;
        }
        &.title{
            background-color: #17233d;
            color: #fff;
        }
        &.content{
            background-color: #515a6e;
            color: #fff;
        }
        &.sub-color{
            background-color: #808695;
            color: #fff;
        }
        &.disabled{
            background-color: #c5c8ce;
            color: #fff;
        }
        &.border{
            background-color: #dcdee2;
            color: #515a6e;
        }
        &.divider{
            background-color: #e8eaec;
            color: #515a6e;
        }
        &.background{
            background-color: #f8f8f9;
            color: #515a6e;
        }
    }

</style>