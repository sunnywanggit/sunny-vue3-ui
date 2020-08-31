<template>
    <div>
        <h2 class="margin20">Button 按钮</h2>
        <p>基础组件，触发业务逻辑时使用</p>
        <h3 class="margin15">代码示例</h3>
        <section class="card">
            <Button>Default</Button>
            <Button theme="dashed">Dashed</Button>
            <Button theme="text">Text</Button>
            <Button theme="link">Link</Button>
            <Button theme="primary">Primary</Button>
            <Button theme="success">Success</Button>
            <Button theme="warining">Warining</Button>
            <Button theme="error">Error</Button>
            <h4 class="margin10">按钮类型</h4>
            <p class="text">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
            <p class="text">通过设置type为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
        </section>
        <section class="card">
            <Button size="big">Large</Button>
            <Button size="middle">Normal</Button>
            <Button size="small">Small</Button>
            <h4 class="margin10">按钮尺寸</h4>
            <p class="text">按钮有三种尺寸：大、默认（中）、小</p>
            <p class="text">通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
        </section>
        <section class="card">
            <Button>Default</Button>
            <Button disabled>Default</Button>
            <br>
            <Button theme="text">Text</Button>
            <Button theme="text" disabled>Text</Button>
            <h4 class="margin10">不可用状态</h4>
            <p class="text">通过添加disabled属性可将按钮设置为不可用状态。</p>
        </section>
        <section class="card">
            <Button loading>加载中</Button>
            <h4 class="margin10">加载中状态</h4>
            <p class="text">通过添加loading属性可以让按钮处于加载中状态。</p>
        </section>
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
