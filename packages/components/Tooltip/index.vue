<template>
    <div :class="classes">
        <div :class="[prefixCls + '-ref']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div 
                :class="[prefixCls + '-popper']"
                :style='popperStyle'
                ref='popper'
                v-show='!disabled && (visiable || always)'
            >
                <div :class="[prefixCls + '-arrow']"></div>
                <div :class="innerClassed">
                    <slot name="content">{{ content }}</slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

const prefixCls = 'yl-ui-tooltip';

export default {
    name: 'ToolTip',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        always: {
            type: Boolean,
            default: false
        },
        content:{
            type: [Number,String],
            default: ''
        },
        maxWidth:{
            type: [Number,String]
        }
    },
    data(){
        return {
            prefixCls,
            visiable: false
        };
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`
            ];
        },
        popperStyle(){
            return {};
        },
        innerClassed(){
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-inner-with-width`]: !!this.maxWidth
                }
            ];
        }
    }
}
</script>

