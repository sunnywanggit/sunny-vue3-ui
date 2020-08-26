<template>
    <div class="sui-dialog-overlay"></div>
    <div class="sui-dialog-wrapper">
        <header>标题</header>
        <main>
            <p>第一行字</p
            <p>第二行字</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>
<script lang="ts">
    import Button from "../Button/Button.vue";
    export default {
        name:"SunnyToast",
        components: {Button}
    }

</script>