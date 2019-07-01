<template>
    <div class="prefixClass">
        <slot></slot>
    </div>
</template>

<script>
const prefixClass = 'yl-ui-modal';

export default {
    name: 'Modal',
    props:{
        backColor: {
            type: String,
            default: 'rgba(0,0,0,0.75)'
        },
        width: {
            type: [Number,String],
            default: '100%'
        },
        height: {
            type: [Number,String],
            default: '100%'
        },
        clickHide: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            prefixClass
        };
    }
}
</script>
