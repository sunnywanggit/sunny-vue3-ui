<template>
    <h1>支持value</h1>
    <Input value="xxx" />
    <h1>支持 disabled</h1>
    <Input value="xxx" disabled />
    <h1>支持 readonly</h1>
    <Input value="xxx"  readonly/>
    <h1>支持 error</h1>
    <Input value="xxx" error="error"/>
    <h1>支持输入数字</h1>
    <Input  type="number"/>
    <h1>支持输入密码</h1>
    <Input  type="password"/>
    <h1>支持 placeholder</h1>
    <Input placeholder="xxx"/>






</template>

<script>
    import Input from '../lib/Input/Input.vue';
    export default {
        name:"InputDemo",
        components: {Input}
    };
</script>

<style lang="scss">

</style>
