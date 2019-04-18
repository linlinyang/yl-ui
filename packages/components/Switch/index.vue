<template>
    <div 
        :class="wrapClasses"
        @click='handleClick'
        ref='switch'
    >
        <input type="hidden" :name='name' :value='currentValue'>
        <div class="yl-ui-switch-text" v-if="checked"></div>
        <div class="yl-ui-switch-thumb"></div>
        <div class="yl-ui-switch-text" v-if="!checked"></div>
    </div>
</template>

<script>

const prefixCls = 'yl-ui-switch';

export default {
    name: 'ySwitch',
    props: {
        value:{
            type: [Boolean,Number,String],
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        },
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            },
            default: 'default'
        },
        activeText: String,
        inActiveText: String,
        activeColor: {
            type: String,
            default: ''
        },
        inActiveColor: {
            type: String,
            default: ''
        },
        activeValue: {
            type: [Boolean,Number,String],
            default: true
        },
        inActiveValue:{
            type: [Boolean,Number,String],
            default: false
        },
        name: {
            type: String,
            default: ''
        },
        custom: String
    },
    data(){
        return {
            currentValue: this.value
        };
    },
    computed: {
        checked(){
            return this.currentValue === this.activeValue;
        },
        wrapClasses(){
            return [
                `${prefixCls}`,
                {
                    [`${this.custom}`]: !!this.custom,
                    [`${prefixCls}-disabled`]: !!this.disabled,
                    [`${prefixCls}-checked`]: !!this.checked,
                    [`${prefixCls}-${this.size}`]: !!this.size
                }
            ];
        }
    },
    watch: {
        checked(val){
            const color = val ? this.activeColor : this.inActiveColor;
            const ySwitch = this.$refs.switch;
            ySwitch.style.borderColor = color;
            ySwitch.style.backgroundColor = color;
        }
    },
    methods:{
        handleClick(e){
            const val = this.currentValue === this.activeValue ? this.inActiveValue : this.activeValue;
            this.currentValue = val;
            this.$emit('input',val);
            this.$emit('on-change',val);
        }
    }
}
</script>

