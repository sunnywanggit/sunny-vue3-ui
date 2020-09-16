<template>
    <div class="sui-input" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" :type="type" :placeholder="placeholder" :class="size">
        <template v-if="error">
            <span class="sui-input-errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'SunnyInput',
        props: {
            value: { type: String },
            disabled: { type: Boolean, default: false },
            readonly: { type: Boolean, default: false },
            error: { type: String },
            type:{type:String,default:'text'},
            placeholder:{type:String},
            size:{type:String,default:'middle'}
        }
    }
</script>
<style lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;

    .sui-input{ 
        font-size: $font-size; 
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {margin-right: .5em; }
        > input { 
            height: 32px; 
            border: 1px solid $border-color; 
            border-radius: 4px; 
            padding: 0 8px; 
            font-size: inherit;
            &:hover { border-color: $border-color-hover; }
            &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
            &.large{height: 40px;}
            &.small{height: 24px;}
            
        }
        &.error {
            > input { border-color: $red; }
        }
        .sui-input-errorMessage { color: $red; }
    }
</style>
