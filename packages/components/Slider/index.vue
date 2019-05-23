<template>
    <div 
        :class='classes'
        ref='slider'
    >
        <input 
            type="hidden" 
            :name="name"
            :value="currentValue"
        >

        <template v-if="showStops">
            <div 
                :class="prefixCls + '-stop'"
                v-for="(val,index) in stops"
                :style="{ left: val}"
                :key='index'
            ></div>
        </template>

        <div 
            :class="prefixCls + '-bar'"
            :style="barStyles"
        ></div>

        <div :class="prefixCls + '-wrap'"
            v-for="(thumb,tindex) in thumbs"
            :key="'thumb' + tindex"
            :style="{left: thumb.left + '%'}"
            @mousedown="beginDrag($event,thumb.index)"
            @touchstart="beginDrag($event,thumb.index)"
        >
            <Tooltip 
                :content='thumb.value'
                placement='top'
                :disabled="disabledTips"
                :always="alwaysShowTips(thumb.index)"
                ref='tooltip'
                :offset='offset'
            >
                <template>
                    <div 
                        :class="thumbCls(thumb.index)"
                    ></div>
                </template>
            </Tooltip>
        </div>

    </div>
</template>

<script>
import Tooltip from '#c/Tooltip/';
import {on,off} from '#/utils/dom';

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
        offset: {
            type: [Number,String],
            default: '0,5px'
        },
        name: String
    },
    data(){
        return {
            prefixCls,
            isDragging: false,//是否开始拖拽
            startX: 0,//点击滑块是水平X位置
            sliderWidth: 0,//整个滑块的水平宽度
            thumbIndex: 0,//选中的滑块的index
            startValue: 0,//开始拖拽时的值
            currentValue: Array.isArray(this.value) ? this.value : [].concat(this.value),//当前滑块的值
            oldValue: 0,
            rangeValue: this.max - this.min,//取值区间
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
            return (index) => {
                return [
                    `${prefixCls}-thumb`,
                    {
                        [`${prefixCls}-thumb-active`]: this.thumbIndex == index && this.isDragging
                    }
                ];
            };
        },
        alwaysShowTips(){
            return (index) => {
                return this.showTip === 'always' || (index === this.thumbIndex && this.isDragging);
            };
        },
        disabledTips(){
            return this.showTip === 'never';
        },
        stopRadio(){
            return 100 * this.step / this.rangeValue;
        },
        stops(){//生成间断点
            const dotsNum = this.rangeValue / this.step;
            const dotsRet = [];

            for(let i = 1; i < dotsNum; i++){
                dotsRet.push(this.stopRadio * i + '%');
            }
            return dotsRet;
        },
        thumbs(){//生成滑块
            return this.currentValue.reduce((ret,value,index) => {
                return ret.concat([{
                    value: this.tipFormat(value,index),
                    index,
                    left: ( value / this.step ) * this.stopRadio
                }]);
            },[]);
        },
        barStyles(){//根据滑块的位置设置选中条的宽度和起点
            const begin = this.currentValue.length > 1 ? this.currentValue[0] : 0;
            const end = this.currentValue[this.currentValue.length - 1];
            
            return {
                width: ((end - begin) / this.step) * this.stopRadio + '%',
                left: (begin / this.step) * this.stopRadio + '%'
            };
        }
    },
    methods: {
        getEvent(e){
            return e.changedTouches ? e.changedTouches[0] : e;
        },
        beginDrag(e,index){
            if(this.isDragging){
                return ;
            }
            e = this.getEvent(e);
            this.isDragging = true;
            const bounding = this.$refs.slider.getBoundingClientRect();
            this.startX = e.clientX;
            this.sliderWidth = bounding.width;
            this.thumbIndex = index;
            this.oldValue = this.startValue = this.currentValue[index];
        },
        dragging(e){
            if(!this.isDragging){
                return ;
            }
            e = this.getEvent(e);
            const curX = e.clientX;
            const stepWidth = (this.step / this.rangeValue) * this.sliderWidth;
            const curVal = Math.round((curX - this.startX) / stepWidth) * this.step + this.startValue;
            
            if(curVal < this.min || curVal > this.max || curVal === this.oldValue){
                return ;
            }

            this.updateThumbs(curVal,this.thumbIndex);   
        },
        endDrag(){
            if(!this.isDragging){
                return ;
            }
            this.isDragging = false;
        },
        updateThumbs(val,index){//更新thumb位置
            this.oldValue = val;
            for(let i = 0; i < index; i++){
                let tempVal = this.currentValue[i];
                if(tempVal > val){
                    this.$set(this.currentValue,i,val);
                }
            }
            this.$set(this.currentValue,index,val);
        },
        updateToolTips(){
            this.$refs.tooltip.forEach((curTip) => {
                curTip.updatePopper();
            });
        }
    },
    watch: {
        currentValue(val){
            this.$emit('change',val.length > 1 ? val : val[0]);
        }
    },
    mounted(){
        this.updateToolTips();
        on(window,'mousemove',this.dragging);
        on(window,'touchmove',this.dragging);
        on(window,'touchend',this.endDrag);
        on(window,'mouseup',this.endDrag);
    },
    destroyed(){
        off(window,'mousemove',this.dragging);
        off(window,'touchmove',this.dragging);
        off(window,'touchend',this.endDrag);
        off(window,'mouseup',this.endDrag);
    }
}
</script>

