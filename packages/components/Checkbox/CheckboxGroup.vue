<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import {queryAll} from '#/utils/query.js';

const prefixCls = 'yl-ui-checkbox-group';
let seed = 0;
const now = +new Date();
const groupDefaultName = () => `ylUICheckbox_${now}_${seed}_${Math.floor(Math.random() * 8999 + 1000)}`;

export default {
    name: 'CheckboxGroup',
    props: {
        value: {
            type: [Array],
            default(){
                return [];
            }
        },
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            },
            default: 'default'
        },
        vertical: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: groupDefaultName
        }
    },
    data(){
        return {
            currentValue: this.value
        };
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-vertical`]: !!this.vertical,
                    [`${prefixCls}-${this.size}`]: !!this.size && this.size !== 'default'
                }
            ];
        }
    },
    methods: {
        updateValue(){
            const childs = queryAll(this,'Checkbox');
            childs.forEach((child) => {
                child.checked = this.currentValue.includes(child.value);
            });
        },
        change(valObj){
            this.currentValue = this.currentValue.filter(value => value !== valObj.value);
            if(valObj.checked){
                this.currentValue.push(valObj.value);
            }
            
            this.$emit('input',this.currentValue);
            this.$emit('on-change',this.currentValue);
        }
    },
    mounted(){
        this.updateValue();
    },
    watch: {
        value(newVal){
            this.currentValue = newVal;
            this.$nextTick(() => {
                this.updateValue();
            });
        }
    }
};

</script>