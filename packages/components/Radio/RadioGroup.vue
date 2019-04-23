<template>
    <div :class="classes" :name='name'>
        <slot></slot>
    </div>
</template>

<script>
import {queryAll} from '#/utils/query';

const prefixCls = 'yl-ui-radio-group';
let seed = 0;
const now = +new Date();
const groupDefaultName = () => `ylUIGroup_${now}_${seed++}${Math.floor(Math.random() * 8999) + 1000}`;

export default {
    name: 'RadioGroup',
    props: {
        value: {
            type: [String,Number],
            default: ''
        },
        type: {
            validator(val){
                return ['default','button'].includes(val);
            },
            default: 'default'
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
            currentValue: this.value,
            childRadios: []
        };
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                {
                    [`${this.custom}`]: !!this.custom,
                    [`${prefixCls}-vertical`]: this.vertical,
                    [`${prefixCls}-${this.size}`]: !!this.size && this.size !== 'default',
                    [`${prefixCls}-${this.type}`]: !!this.type && this.type !== 'default'
                }
            ];
        }
    },
    methods: {
        updateValue(){
            if(this.childRadios = queryAll(this,'Radio')){
                this.childRadios.forEach((child) => {
                    child.checked = child.value === this.currentValue;
                });
            }
        },
        change(value){
            this.currentValue = value;
            this.updateValue();
            this.$emit('input',value);
            this.$emit('on-change',value);
        }
    },
    mounted(){
        this.updateValue();
    }
}
</script>