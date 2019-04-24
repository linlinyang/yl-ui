<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>

const prefixCls = 'yl-ui-checkbox-group';
let seed = 0;
const now = +new Date();
const groupDefaultName = () => `ylUICheckbox_${now}_${seed}_${Math.floor(Math.random() * 8999 + 1000)}`;

export default {
    name: 'CheckboxGroup',
    props: {
        value: {
            type: [String,Number,Array],
            default: ''
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

    },
    mounted(){}
};

</script>