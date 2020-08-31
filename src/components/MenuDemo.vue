<template>
    <SunnyMenu>
        <SunnyMenuItem>根1</SunnyMenuItem>
        <SunnySubmenu>
            <tempalte slot="title">根2</tempalte>
            <SunnyMenuItem>根2-1</SunnyMenuItem>
            <SunnyMenuItem>根2-1</SunnyMenuItem>
        </SunnySubmenu>
    </SunnyMenu>
</template>

<script lang="ts">
    import SunnyMenu from "../lib/Menu/SunnyMenu.vue";
    import SunnyMenuItem from "../lib/Menu/SunnyMenuItem.vue";
    import SunnySubmenu from "../lib/Menu/SunnySubmenu.vue";
    import {reactive} from 'vue'
    export default {
        components: {SunnySubmenu, SunnyMenuItem, SunnyMenu},
        setup(){
            const data =  reactive([
                {title:'根1',id:1},
                {title:'根2',id:2},
                {title:'根3',id:3},
                {title:'根4',id:4,children:[
                        {title:'根4-1',id:41},
                        {title:'根4-2',id:42},
                    ]},
            ])

            return {data}
        }

    }
</script>

<style scoped>

</style>