<template>
    <SunnyForm :rules="rules" :model="ruleForm">
        <SunnyFormItem label="账号" prop="username">
            {{ruleForm.username}}
            <SunnyInput :value="ruleForm.username" @input="(value)=>typeof value === 'string' ? ruleForm.username = value : ''"></SunnyInput>
        </SunnyFormItem>
        <SunnyFormItem label="密码" prop="password">
            {{ruleForm.password}}
            <SunnyInput :value="ruleForm.password" @input="(value)=>typeof value === 'string' ? ruleForm.password = value : ''"></SunnyInput>
        </SunnyFormItem>
        <SunnyFormItem>
            <button>提交表单</button>
        </SunnyFormItem>
    </SunnyForm>
</template>

<script lang="ts">
    import SunnyForm from "../lib/SunnyForm.vue";
    import SunnyFormItem from "../lib/SunnyFormItem.vue";
    import SunnyInput from "../lib/SunnyInput.vue";
    import  {reactive} from 'vue'
    export default {
        name:'FormDemo',
        components: {SunnyInput, SunnyFormItem, SunnyForm},
        setup(){
            const ruleForm = reactive({username:'wang',password:''})
            const rules = reactive({
                username:[
                    {required:true,message:'请输入名称'},
                ],
                password:[
                    {required:true,message:'请输入密码'}
                ]
            })
            const handleInput = (value)=>{
                console.log('value',value);
                console.log('type',typeof  value);
            }



            return {ruleForm,rules,handleInput}
        }
    }
</script>

<style scoped>

</style>