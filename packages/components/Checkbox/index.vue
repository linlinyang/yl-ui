<template>
    <label :class="wrapClasses">
        <div :class="checkboxClasses">
            <input 
                ref='checkbox'
                type="checkbox"
                :name='groupName'
                :checked='curChecked'
                :value='value'
                :disabled='disabled'
                @blur='handleBlur'
                @focus='handleFocus'
                @change='handleChange'
            >
            <Icon v-if="curChecked" type='correct' :color='iconColor'></Icon>
        </div>
        <div class="yl-ui-checkbox-label" v-if='hasSlot' v-show='slotReady'>
            <slot></slot>
        </div>
    </label>
</template>

<script>
import {parent} from '#/utils/query';
import Icon from '#c/Icon/';
const prefixCls = 'yl-ui-checkbox';

export default {
    name: 'Checkbox',
    components: {
        Icon
    },
    props: {
        value: String,
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
            type: Boolean,
            default: false
        },
        name: String,
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            },
            default: 'default'
        }
    },
    data(){
        return {
            curChecked: this.checked,
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
                `${prefixCls}-wrap`,
                {
                    [`${prefixCls}-wrap-checked`]: !!this.curChecked,
                    [`${prefixCls}-wrap-disabled`]: !!this.disabled,
                    [`${prefixCls}-wrap-focus`]: !!this.focus,
                    [`${prefixCls}-wrap-${this.size}`]: !!this.size && this.size !== 'default'
                }
            ];
        },
        checkboxClasses(){
            return [
                `${prefixCls}`
            ];
        },
        iconColor(){
            return this.disabled ? '#ccc' : '#fff';
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
        handleChange(e){
            if(this.disabled){
                return ;
            }
            const target = e.target || e.srcElement;

            this.curChecked = target.checked;
            this.$emit('input',e);

            if(this.inGroup){
                this.parent.change({
                    value: this.value,
                    checked: this.curChecked
                });
            }else{
                this.$emit('on-change',this.curChecked);
            }
        }
    },
    mounted(){
        this.hasSlot = this.$slots.default !== undefined;
        this.slotReady = true;
        
        if(this.parent){
            this.inGroup = true;
            this.groupName = this.groupName && this.parent.name
        }
    },
    watch: {
        checked(newVal){

        },
        value(newVal){
            
        }
    }
}
</script>
