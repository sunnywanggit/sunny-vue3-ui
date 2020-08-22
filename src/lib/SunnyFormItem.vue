<template>
    <div @input="handleValidate">
        <label v-if="label">{{label}}</label>
        <slot></slot>
        {{errMessage}}
    </div>
</template>

<script>
    import {onMounted,inject,reactive,ref} from 'vue'
    import Schema from 'async-validator'
    export default {
        name:'SunnyFormItem',
        props:{
            label:String,//标签
            prop:String  //当前校验哪一个属性
        },
        setup(props,context){
            const sunnyform = inject('sunnyform')
            let errMessage = ref('')

            const handleValidate=()=>{
                console.log(props.prop,sunnyform.rules[props.prop]);
                let rule = sunnyform.rules[props.prop];
                let newValue = sunnyform.model[props.prop];

                //使用 async-validator 进行验证
                let descriptor = { //当前属性的描述
                  [props.prop] : rule
                }
                //通过描述信息创建一个骨架
                let schema = new Schema(descriptor);
                schema.validate({[props.prop]:newValue},(err,res)=>{
                    if(err){
                        errMessage.value = err[0].message;
                    }else{
                        errMessage.value = ''
                    }
                })
            }

            return {handleValidate,errMessage}
        },
    }
</script>

<style scoped>

</style>