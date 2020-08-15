<template>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="text">你好</Button>
        <Button theme="link">你好</Button>
        <h1>size</h1>
        <Button size="big">big</Button>
        <Button size="middle">normal</Button>
        <Button size="small">small</Button>
        <h1>level</h1>
        <Button level="main">main主要按钮</Button>
        <Button>big</Button>
        <Button level="danger">危险按钮</Button>
        <h1>disabled</h1>
        <Button disabled>disabled</Button>
        <Button :disabled="true">disabled</Button>
        <h1>laoding</h1>
        <Button loading>加载中</Button>
    </div>
</template>

<script>
    import Button from '../lib/Button/Button.vue';

    export default {
        name: 'ButtonDemo',
        components: {Button},
        setup() {
            const onClick = () => {
                console.log('hi');
            };
            return {onClick};
        }
    };
</script>
