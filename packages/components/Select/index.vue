<template>
    <div 
        :class="selectCls"
        ref='select'
    >

        <input type="hidden" :name="name" :value="currentValue">
        
        
    </div>
</template>

<script>
const prefixCls = 'yl-ui-select';
let uid = 1;

export default {
    name: 'Select',
    props: {
        value: {
            type: [String,Number,Array],
            default: ''
        },
        name: {
            type: String,
            default: `yl_ui_select_${+new Date()}_${++uid}`
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            },
            default: 'default'
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
    },
    data(){
        return {
            prefixCls,
            currentValue: this.checkValue(this.value)
        };
    },
    computed: {
        selectCls(){
            return [
                prefixCls
            ];
        }
    },
    watch: {
        currentValue(newVal){
            this.$emit('input',newVal);
        }
    },
    methods: {
        checkValue(val){
            return Array.isArray(val) ? val : [val];
        }
    }
}
</script>
