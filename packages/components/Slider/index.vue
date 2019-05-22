<template>
    <div :class='classes'>

        <input 
            type="hidden" 
            :name="name"
            :value="currentValue"
        >

        <template v-if="showStops">
            <div 
                :class="stopClasses"
                v-for="(val,index) in stops"
                :style="{ left: val}"
                :key='index'
            ></div>
        </template>

        <div :class="thumbCls">
            <Tooltip 
                :content='currentValue'
                v-for="(thumb,key) in thumbs"
                :key='key'
            >
                <template>
                    <div :class="prefixCls + '-thumb'"></div>
                </template>
            </Tooltip>
        </div>

    </div>
</template>

<script>
import Tooltip from '#c/Tooltip/';

const prefixCls = 'yl-ui-slider';

export default {
    name: 'Slider',
    components: {Tooltip},
    props: {
        value: {
            type: [Number,Array],
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        min: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        },
        range: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showStops: {
            type: Boolean,
            default: false
        },
        showTip: {
            validator(val){
                return ['hover','always','never'].includes(val);
            },
            default: 'hover'
        },
        tipFormat: {
            type: Function,
            default(val){
                return val;
            }
        },
        size: {
            validator(val){
                return ['default','small','mini'].includes(val);
            },
            default: 'default'
        },
        name: String
    },
    data(){
        return {
            prefixCls,
            currentValue: this.value
        }
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-disabled`]: !!this.disabled,
                    [`${prefixCls}-range`]: !!this.range,
                    [`${prefixCls}-${this.size}`]: !!this.size && this.size !== 'default'
                }
            ];
        },
        thumbCls(){
            return [
                `${prefixCls}-wrap`
            ];
        },
        rangeValue(){
            return this.max - this.min;
        },
        stops(){
            const dotsNum = this.rangeValue / this.step;
            const dotWidth = 100 * this.step / this.rangeValue;
            const dotsRet = [];
            for(let i = 1; i < dotsNum; i++){
                dotsRet.push(dotWidth * i + '%');
            }
            return dotsRet;
        },
        thumbs(){
            return Array.isArray(this.value) ? this.value : [].concat(this.value);
        },
        stopClasses(){
            return [
                `${prefixCls}-stop`
            ];
        }
    }
}
</script>

