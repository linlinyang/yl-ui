<template>
    <div 
        :class="classes"
        @click="select"
    >
        <slot>{{ displayLabel }}</slot>
        <Icon
            v-if='selected'
            type='correct'
            color='rgba(45,140,240,.9)'
        ></Icon>
    </div>
</template>

<script>
import Icon from '#c/Icon/';
const prefixCls = 'yl-ui-option';

export default {
    name: 'Option',
    components: {
        Icon
    },
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
    computed: {
        displayLabel(){
            return this.label ? this.label : this.value;
        },
        classes(){
            return [
                prefixCls,
                {
                    [`${prefixCls}-selected`]: this.selected,
                    [`${prefixCls}-disabled`]: this.disabled
                }
            ];
        }
    },
    methods: {
        select(e){
            if(this.disabled){
                return ;
            }

            this.$emit('on-select',this.value);
        }
    }
    
}
</script>

