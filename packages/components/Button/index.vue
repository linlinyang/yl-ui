<template>
<div 
    :class="classes"
    @click='clickHandler'
    :disabled='disabled'
>
    <Icon 
        class="yl-ui-load-loop" 
        type='loading'
        v-if='loading'
    ></Icon>
    <Icon 
        :type='icon'
        :custom='customIcon'
        v-if="(icon || customIcon) && !loading"
    ></Icon>
    <span v-if="showSlot" ref="slot"><slot></slot></span>
</div>
</template>

<script>
import Icon from '#c/Icon/';

const prefixCls = 'yl-ui-button';

export default {
    name: 'Button',
    components: {
        Icon
    },
    props: {
        icon: {
            type: String,
            default: ''
        },
        customIcon: {
            type: String,
            default: ''
        },
        type: {
            validator(val){
                return ['default','primary', 'info', 'success', 'warning','danger'].includes(val);
            },
            default: 'default'
        },
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            }
        },
        custom: {
            type: String,
            default: ''
        },
        round: Boolean,
        loading: Boolean,
        plain: Boolean,
        disabled: Boolean
    },
    data(){
        return {
            showSlot: true
        };
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                {
                    plain: this.type !== 'default' && !!this.plain,
                    disabled: !!this.disabled,
                    [`${this.custom}`]: this.custom !== '',
                    [`${prefixCls}-round`]: !!this.round,
                    [`${prefixCls}-loading`]: !!this.loading,
                    [`${prefixCls}-${this.type}`]: this.type !== 'default',
                    [`${prefixCls}-${this.size}`]: this.size !== 'default' && this.size
                }
            ];
        }
    },
    methods: {
        clickHandler(e){
            !this.disabled && this.$emit('click',e);
        }
    }
}
</script>

