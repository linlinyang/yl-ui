<template>
    <div :class="wrapClasses">

        <div class="yl-ui-input-prepend" v-if="prepend" v-show='slotReady'>
            <slot name="prepend"></slot>
        </div>

        <div :class="innerClasses">
            <div class="yl-ui-input-prefix-icon" v-if="prefixIcon || prefix">
                <Icon 
                    :type='prefixIcon' 
                    v-if='prefixIcon'
                ></Icon>
                <slot name="prefixIcon"></slot>
            </div>

            <input 
                class="yl-ui-input-core"
                :type="type"
                ref="input"
                :placeholder="placeholder"
                :name="name"
                :disabled="disabled"
                :value="currentValue"
                :maxlength="maxlength"
                :readonly="readonly"
                @input="handleInput"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
                @compositionstart="handleCompositionStart"
                @compositionend="handleCompositionEnd"
            >

            <div class="yl-ui-input-suffix-icon" v-if="suffixIcon || suffix || clearable">
                <Icon 
                    :type="suffixIcon"
                    v-if='suffixIcon'
                ></Icon>
                <Icon 
                    type="fill-close"
                    v-if='clearable'
                    custom='yl-ui-input-clear'
                    @click='handleClear'
                ></Icon>
                <slot name="suffixIcon"></slot>
            </div>
        </div>

        <div class="yl-ui-input-append" v-if="append" v-show="slotReady">
            <slot name="append"></slot>
        </div>

    </div>
</template>

<script>
import Icon from '#c/Icon/';
import Emitter from '../../mixins/emitter';

const prefixCls = 'yl-ui-input';

export default {
    name: 'Input',
    components: {
        Icon
    },
    mixins: [Emitter],
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String,Number],
            default: ''
        },
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            }
        },
        placeholder: {
            type: String,
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        min: Number,
        max: Number,
        maxlength: Number,
        disabled: Boolean,
        clearable: Boolean,
        prefixIcon: String,
        suffixIcon: String,
        spellcheck: Boolean,
        search: Boolean,
        name: String,
        enterButton: {
            type: [Boolean,String],
            default: false
        },
        plain: {
            type: Boolean,
            default: true
        },
        custom: String
    },
    data(){
        return {
            prepend: true,
            append: true,
            prefix: true,
            suffix: false,
            slotReady: false,
            currentValue: this.value,
            isComposing: false
        };
    },
    computed: {
        wrapClasses(){
            return [
                `${prefixCls}`,
            {
                custom: !!this.custom,
                [`${prefixCls}-group`]: this.prepend || this.append || (this.search && this.enterButton),
                [`${prefixCls}-group-prepend`]: !!this.prepend,
                [`${prefixCls}-group-append`]: !!this.append,
                [`${prefixCls}-plain`]: this.plain,
                [`${prefixCls}-disabled`]: this.disabled,
                [`${prefixCls}-${this.size}`]: !!this.size && this.size !== 'default'
            }];
        },
        innerClasses(){
            return [
                `${prefixCls}-wrap`,
                {
                    [`${prefixCls}-prefix`]: !!this.prefixIcon || this.prefix,
                    [`${prefixCls}-suffix`]: !!this.suffixIcon || this.clearable || this.suffix
                }
            ];
        }
    },
    watch: {
        value(newVal){
            if(this.currentValue !== newVal){
                this.currentValue = newVal;
            }
        }
    },
    methods: {
        focus(){
            this.$refs.input.focus();
        },
        blur(){
            this.$refs.input.blur();
        },
        setCurrentValue(val){
            if(val === this.currentValue){
                return ;
            }
            this.currentValue = val;
        },
        handleInput(e){
            if(this.isComposing){
                return ;
            }

            const value = e.target.value;
            this.$emit('input',value);
            this.setCurrentValue(value);
            this.$emit('on-change',event);
        },
        handleChange(e){
            this.$emit('change',e);
        },
        handleFocus(e){
            this.$emit('on-focus',e);
        },
        handleBlur(e){
            this.$emit('on-blur',e);
        },
        handleCompositionStart(){
            this.isComposing = true;
        },
        handleCompositionEnd(e){
            this.isComposing = false;
            this.handleInput(e);
        },
        handleClear(e){
            this.$emit('input','');
            this.$emit('change','');
            this.$emit('clear','');
            this.setCurrentValue('');
        }
    },
    mounted(){
        const slots = this.$slots;
        this.prepend = slots.prepend !== undefined;
        this.append = slots.append !== undefined;
        this.prefix = slots.prefixIcon !== undefined;
        this.suffix = slots.suffixIcon !== undefined;
        this.slotReady = true;
    }
}
</script>
