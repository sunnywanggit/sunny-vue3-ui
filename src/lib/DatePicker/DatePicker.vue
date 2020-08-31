<template>
    <!--使用自定义指令，当我们时候自定义指令的时候，我们就可以自己再指令上加一些功能，
    比如说给dom加事件，比如说我当前点击的是不是这个元素
    因为指令的第一个参数就是当前元素的真实dom
    -->
    <div v-click-outside>
        <input type="text" :value="formatDate">
        <div v-if="isVisible">
            context
        </div>
    </div>
</template>

<script>
    import * as utils from '../../util/util.js'
    export default {
        directives:{//指令的声明周期，在绑定和发生变化时都会触发
            clickOutside:{
                //让指令只在绑定到当前元素上时触发
                bind(el,bindings,vnode){
                    console.log('bind')
                    let handler = (e)=>{
                        console.log(e.target)
                    }
                    el.heandler = handler
                    document.addEventListener('click',handler)
                },
                unbind(el){
                    document.removeEventListener('click',el.handler)
                }
            }

        },
        name:'DatePicker',
        data(){
            return{ isVisible:false }
        },
        props:{
            value:{
                type:Date,
                default:()=>new Date() //注意，这里返回的函数值，必须是一个函数类型
            }
        },
        computed:{
            formatDate(){
                let {year,month,day} = utils.getYearMonthDay(this.value)
                return `${year}-${month+1}-${day}`
            }
        },
        methods:{ }
    }

</script>
<style lang="scss">

</style>