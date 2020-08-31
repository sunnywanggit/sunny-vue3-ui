<template>
    <DatePicker/>
</template>
<script>
    import DatePicker from "../lib/DatePicker/DatePicker.vue";
    export default {
        name:'DatePickerDemo',
        components: {DatePicker},
        data(){
            return{
                now:new Date()
            }
        }
    }
</script>