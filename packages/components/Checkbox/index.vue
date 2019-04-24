<template>
    <label :class="wrapClasses">
        <div :class="checkboxClasses">
            <input 
                ref='checkbox'
                type="checkbox"
                :name='groupName'
                :checked='checked'
                :value='value'
                :disabled='disabled'
                @blur='handleBlur'
                @focus='handleFocus'
                @change='handleChange'
            >
        </div>
        <div class="yl-ui-checkbox-label" v-if='hasSlot' v-show='slotReady'>
            <slot></slot>
        </div>
    </label>
</template>

<script>
import {parent} from '#/utils/query';
const prefixCls = 'yl-ui-checkbox';

export default {
    name: 'Checkbox',
    props: {
        value: String,
        disabled: {
            type: Boolean,
            default: false
        },
        name: String
    },
    data(){
        return {
            checked: false,
            hasSlot: true,
            slotReady: false,
            groupName: this.name,
            parent: parent(this,'CheckboxGroup'),
            inGroup: false,
            focus: false
        };
    },
    computed: {
        wrapClasses(){
            return [
                `${prefixCls}-wrap`
            ];
        },
        checkboxClasses(){
            return [
                `${prefixCls}`
            ];
        }
    },
    methods: {
        handleFocus(e){
            this.focus = true;
            this.$emit('focus',e);
        },
        handleBlur(e){
            this.focus = false;
            this.$emit('blur',e);
        },
        handleChange(e){}
    },
    mount(){
        this.hasSlot = this.$slots.default !== undefined;
        this.slotReady = true;

        if(this.parent){
            this.inGroup = true;
            this.groupName = this.groupName && this.parent.name
        }
    }
}
</script>
