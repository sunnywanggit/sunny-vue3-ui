<template>
    <div class="sui-card" :class="[{bordered:!bordered},{disHover:disHover}]">
        <div class="sui-card-header">
            <div>
                <slot name="title"></slot>
            </div>
            <div>
                <slot name="extra"></slot>
            </div>
        </div>
        <div class="sui-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SunnyCard',
        props:{
            bordered:{
                type:Boolean,
                default:true
            },
            disHover:{
                type:Boolean,
                default:false
            }
        }

    }
</script>

<style lang="scss">

    $color-grey:lighten(#ccc,8%);

    .sui-card{
        background-color: #fff;
        border: 1px solid $color-grey;
        display: flex;
        flex-direction: column;

        &-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 10px;
            border-bottom: 1px solid $color-grey;
        }
        &-body{
            padding: 10px 10px;
            flex-grow: 1;
        }

        &.bordered{
            border: none;
        }
        &:hover{
            box-shadow: 5px 5px 3px darken(#EEEEEE,2%);
        }
        &.disHover{
            box-shadow: none;
        }
    }
</style>