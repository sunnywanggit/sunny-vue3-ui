<template>
    <SunnyForm>
        <SunnyFormItem label="账号">
            <SunnyInput></SunnyInput>
        </SunnyFormItem>
        <SunnyFormItem label="密码">
            <SunnyInput></SunnyInput>
        </SunnyFormItem>
        <SunnyFormItem label="密码">
            <button>提交表单</button>
        </SunnyFormItem>
    </SunnyForm>
</template>

<script>
    import SunnyForm from "../lib/SunnyForm.vue";
    import SunnyFormItem from "../lib/SunnyFormItem.vue";
    import SunnyInput from "../lib/SunnyInput.vue";
    export default {
        name:'FormDemo',
        components: {SunnyInput, SunnyFormItem, SunnyForm}
    }
</script>

<style scoped>

</style>