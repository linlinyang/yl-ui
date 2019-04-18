<template>
    <div class="wrapClasses">
        <input type="hidden" :name='name' :value='currentValue'>
        <div class=""></div>
    </div>
</template>

<script>

const prefixCls = 'yl-ui-switch';

export default {
    name: 'switch',
    props: {
        value:{
            type: [Boolean,Number,String],
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        activeText: String,
        inActiveText: String
    }
}
</script>

