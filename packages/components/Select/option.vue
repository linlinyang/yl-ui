<template>
    <div class=""></div>
</template>

<script>
const prefixCls = 'yl-ui-option';

export default {
    name: 'Option',
    props: {
        value: {
            type: [String,Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        label: [String,Number]
    },
    data(){
        return {};
    },
    
}
</script>

