<template>
    <li>
        <div><slot name='title'></slot></div>
        <ul>
            <slot name="default"></slot>
        </ul>
    </li>
</template>

<script>
    export default {
        name:"SunnySubmenu"

    }
</script>

<style scoped>

</style>