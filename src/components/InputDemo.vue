<template>
    <div>
        <h2 class="margin20">Input 输入框</h2>
        <h3 class="margin15">概述</h3>
        <section class="margin10">
            <p class="text">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
        </section>
        <h3 class="margin15">代码示例</h3>

        <section class="card">
            <SunnyInput placeholder="basic usage" />
            <h4 class="margin10">基本使用</h4>
            <p class="text">基本使用</p>
        </section>

        <section class="card">
            <SunnyInput placeholder="disabled" disabled/>
            <h4 class="margin10">是否禁用</h4>
            <p class="text">是否禁用状态，默认为 false</p>
        </section>

        <section class="card">
            <SunnyInput placeholder="readonly" readonly/>
            <h4 class="margin10">只读</h4>
            <p class="text">设置 readonly 开启只读状态，默认为 false</p>
        </section>

        <section class="card">
            <SunnyInput placeholder="error" value="error" error="error"/>
            <h4 class="margin10">error</h4>
            <p class="text">支持 error 提示</p>
        </section>

        <section class="card">
            <SunnyInput size="large" placeholder="large size" style="margin-bottom:20px"/>
            <br>
            <SunnyInput placeholder="default size" style="margin-bottom:20px"/>
            <br>
            <SunnyInput size="small" placeholder="small size" />
            <h4 class="margin10">三种大小</h4>
            <p class="text">我们为 Input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。</p>
        </section>

        <section class="card">
            <SunnyInput placeholder="input a number" />
            <h4 class="margin10">输入时格式化展示</h4>
            <p class="text">格式化输入内容，仅支支持数字输入</p>
        </section>

        <section class="card">
            <SunnyInput placeholder="password" />
            <h4 class="margin10">密码输入</h4>
            <p class="text">设置 type="password" 即可支持密码输入</p>
        </section>
    </div>

</template>

<script>
    import SunnyInput from '../lib/Input/Input.vue';
    export default {
        name:"InputDemo",
        components: {SunnyInput}
    };
</script>

<style lang="scss">

</style>
