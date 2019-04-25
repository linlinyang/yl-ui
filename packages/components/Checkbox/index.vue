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
            <Icon v-if="checked" type='correct' :color='iconColor' :size='iconSize'></Icon>
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
        value: [String,Boolean],
        disabled: {
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
                `${prefixCls}-wrap`,
                {
                    [`${prefixCls}-wrap-checked`]: !!this.checked,
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
        },
        iconSize(){
            return this.size === 'default' ? 14 : 12;
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

            this.checked = target.checked;
            this.$emit('input',this.checked);

            if(this.inGroup){
                this.parent.change({
                    value: this.value,
                    checked: this.checked
                });
            }else{
                this.$emit('on-change',this.checked);
            }
        }
    },
    mounted(){
        this.hasSlot = this.$slots.default !== undefined;
        this.slotReady = true;
        
        if(this.parent){
            this.inGroup = true;
            this.groupName = this.groupName && this.parent.name
        }else{
            this.checked = !!this.value;
        }
    },
    watch: {
        value(newVal){
            this.$nextTick(() => {
                if(this.inGroup){
                    this.parent.updateValue();
                }else{
                    this.checked = !!newVal;
                }
            });
        }
    }
}
</script>
