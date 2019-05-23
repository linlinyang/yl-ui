<template>
    <div 
        :class="classes"
        @mouseenter="handlerMouseEnter($event)"
        @mouseleave="handlerMouseLeave($event)"
        @touchstart='handlerMouseEnter'
        @touchend='handlerMouseLeave'
    >
        <div :class="[prefixCls + '-ref']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div 
                :class="[prefixCls + '-popper']"
                ref='popper'
                v-show='!disabled && (visiable || always)'
            >
                <div :class="[prefixCls + '-arrow']"></div>
                <div 
                    :class="innerClassed"
                    :style='popperStyle'
                >
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
        delay: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            prefixCls,
            visiable: false,
            delayTimer: null
        };
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`
            ];
        },
        popperStyle(){
            let styles = {};
            if(this.maxWidth){
                styles['max-width'] = `${this.maxWidth}px`;
            }
            return styles;
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
            if(this.delayTimer){
                clearTimeout(this.delayTimer);
            }
            
            this.delayTimer = setTimeout(() => {
                this.visiable = true;
            },this.delay);
        },
        handlerMouseLeave(){
            if(this.delayTimer){
                clearTimeout(this.delayTimer);
                this.delayTimer = setTimeout(() => {
                    this.visiable = false;
                },100);
            }
        }
    }
}
</script>

