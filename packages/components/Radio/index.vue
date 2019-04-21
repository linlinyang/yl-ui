<template>
    <div :class="wrapClasses">
        <div :class="radioBox">
            <input 
                ref="radio"
                type="radio"
                :name="groupName"
                :checked="checked"
                :value="value"
                :disabled="disabled"
                :class="inputClasses"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
            >
        </div>
        <div class="yl-ui-radio-label" v-if='hasLabel' v-show="slotReady">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {parent} from '#/utils/query';

const prefixCls = 'yl-ui-radio';

export default {
    name: 'Radio',
    props: {
        value: String,
        checked:{
            type: Boolean,
            default: false
        },
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
            currentValue: this.value,
            slotReady: false,
            hasLabel: true,
            active: this.checked
        };
    },
    computed:{
        wrapClasses(){
            return [
                `${prefixCls}-wrap`
            ];
        },
        radioBox(){
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.active
                }
            ];
        },
        inputClasses(){}
    },
    methods: {
        handleChange(){
            console.log('change');
            this.active = !this.active;
        },
        handleFocus(){
            console.log('focus');
        },
        handleBlur(e){
            console.log('blur');
        }
    },
    mounted(){
        this.hasLabel = this.$slots.default !== undefined;
        this.slotReady = true;

        if(this.parent){
            this.inGroup = true;
            this.groupName = this.parent.name;
        }
    }
}
</script>