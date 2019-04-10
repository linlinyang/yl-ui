<template>
<div class="btn">
    <Icon class="loading" ></Icon>
    <Icon 
        :type='icon'
        :custom='customIcon'
        v-if="(icon || customIcon) && !loading"
    ></Icon>
    <slot v-if="showSlot"></slot>
</div>
</template>

<script>
import Iocn from '#c/Icon/';

export default {
    name: 'Button',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        customIcon: {
            type: String,
            default: ''
        },
        loading: Boolean,
        plain: Boolean
    },
    data(){
        return {
            showSlot: true
        };
    }
}
</script>

<style lang="scss" scoped>

</style>


