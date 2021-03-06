<template>
    <label :class="wrapClasses">
        <div :class="radioBox">
            <input 
                ref="radio"
                type="radio"
                :name="groupName"
                :checked="checked"
                :value="value"
                :disabled="disabled"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
            >
        </div>
        <div class="yl-ui-radio-label" v-if='hasLabel' v-show="slotReady">
            <slot></slot>
        </div>
    </label>
</template>

<script>
import {parent} from '#/utils/query';

const prefixCls = 'yl-ui-radio';

export default {
    name: 'Radio',
    props: {
        value: String,
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        }
    },
    data(){
        return {
            groupName: this.name,
            parent: parent(this,'RadioGroup'),
            inGroup: false,
            checked: false,
            slotReady: false,
            hasLabel: true,
            focus: false
        };
    },
    computed:{
        wrapClasses(){
            return [
                `${prefixCls}-wrap`,
                {
                    [`${prefixCls}-wrap-checked`]: this.checked,
                    [`${prefixCls}-wrap-focus`]: this.focus,
                    [`${prefixCls}-wrap-disabled`]: this.disabled
                }
            ];
        },
        radioBox(){
            return [
                `${prefixCls}`
            ];
        }
    },
    methods: {
        handleChange(e){
            if(this.disabled){
                return ;
            }
            const target = e.target || e.srcElement;

            this.checked = target.checked;
            this.$emit('input',this.value);

            if(this.inGroup){
                this.parent.change(this.value);
            }else{
                this.$emit('on-change',this.value);
            }
        },
        handleFocus(e){
            this.focus = true;
            this.$emit('focus',e);
        },
        handleBlur(e){
            this.focus = false;
            this.$emit('blur',e);
        }
    },
    mounted(){
        this.hasLabel = this.$slots.default !== undefined;
        this.slotReady = true;

        if(this.parent){
            this.inGroup = true;
            this.groupName = this.groupName && this.parent.name;
        }
    },
    watch: {
        value(newVal){
            if(this.value !== newValue && this.inGroup){
                this.parent.change(newVal);
            }
        }
    }
}
</script>