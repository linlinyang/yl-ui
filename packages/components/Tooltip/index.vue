<template>
    <div 
        :class="classes"
        @mouseenter="handlerMouseEnter"
        @mouseleave="handlerMouseLeave"
        @touchstart='handlerMouseEnter'
        @touchend='handlerMouseLeave'
    >
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
import popper from '#/mixins/popper.js';

const prefixCls = 'yl-ui-tooltip';

export default {
    name: 'ToolTip',
    mixins: [popper],
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
        },
        placement: {
            validator(val){
                if(typeof val !== 'string'){
                    return false;
                }
                return /^(top|left|bottom|right)(-start|-end)?$/.test(val);
            },
            default: 'top'
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
    },
    methods: {
        handlerMouseEnter(){
            this.visiable = true;
        },
        handlerMouseLeave(){
            this.visiable = false;
        }
    }
}
</script>

