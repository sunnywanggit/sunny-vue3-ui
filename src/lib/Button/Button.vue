<template>
    <button class="sui-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="sui-loadingIndicator"></span>
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from 'vue';

    export default {
        name: 'Button',
        props: {
            theme: {
                type: String,
                default: 'button'
            },
            size: {
                type: String,
                default: 'normal'
            },
            level: {
                type: String,
                default: 'normal',
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const {theme, size, level} = props;
            const classes = computed(() => {
                return {
                    [`sui-theme-${theme}`]: theme,
                    [`sui-size-${size}`]: size,
                    [`sui-level-${level}`]: level,
                };
            });
            return {classes};
        }

    };
</script>
<style lang="scss">
    $grey: grey;
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;
    $red: red;
    $color-success:#00C172;
    $color-warining:#FF9300;
    $color-error:#FF2900;
    .sui-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        transition: background 250ms;

        & + & {
            margin-left: 8px;
        }

        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }

        &:focus {
            outline: none;
        }

        &::-moz-focus-inner {
            border: 0;
        }

        &.sui-theme-link {
            border-color: transparent;
            box-shadow: none;
            color: $blue;

            &:hover, &:focus {
                color: lighten($blue, 10%);
            }
        }

        &.sui-theme-dashed{
            border: 1px dashed #ccc;
            color:#ccc;
            &:hover {
                color: lighten($blue, 10%);
                border-color: lighten($blue, 10%);
            }
        }

        &.sui-theme-primary{
            background-color: #008EF0;
            color:#fff;
            &:hover {
                background-color: lighten(#008EF0, 10%);
                color: lighten(#fff, 10%);
            }
        }

        &.sui-theme-success{
            border: none;
            background-color: $color-success;
            color:#fff;
            &:hover {
                background-color: lighten($color-success, 10%);
                color: lighten(#fff, 10%);
            }
        }

        &.sui-theme-warining{
            border: none;
            background-color: $color-warining;
            color:#fff;
            &:hover {
                background-color: lighten(#FF9300, 10%);
                color: lighten(#fff, 10%);
            }
        }

        &.sui-theme-error{
            border: none;
            background-color: $color-error;
            color:#fff;
            &:hover {
                background-color: lighten($color-error, 10%);
                color: lighten(#fff, 10%);
            }
        }

        &.sui-theme-text {
            border-color: transparent;
            box-shadow: none;
            color: inherit;

            &:hover, &:focus {
                background: darken(white, 5%);;
            }
        }

        &.sui-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px
        }

        &.sui-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }

        &.sui-theme-button {
            &.sui-level-main {
                background: $blue;
                color: white;
                border-color: $blue;

                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }

            &.sui-level-danger {
                background: $red;
                border-color: $red;
                color: white;

                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }
        }

        &.sui-theme-link {
            &.sui-level-danger {
                color: $red;

                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.sui-theme-text {
            &.sui-level-main {
                color: $blue;

                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }

            &.sui-level-danger {
                color: $red;

                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.sui-theme-button {
            &[disabled] {
                cursor: not-allowed;
                color: lighten($grey,10%);

                &:hover {;
                    border-color:lighten($grey,10%) ;
                }
            }
        }

        &.sui-theme-link, &.sui-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
            }
        }

        > .sui-loadingIndicator {
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: sui-spin 1s infinite linear;
        }
    }

    @keyframes sui-spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
</style>

