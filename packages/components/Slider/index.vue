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
                :class="stopClasses"
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
                :content='thumb.val'
                placement='top'
                offset='0,5px'
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
            isDragging: false,
            startX: 0,
            sliderWidth: 0,
            thumbIndex: 0,
            startValue: 0,
            currentValue: Array.isArray(this.value) ? this.value : [].concat(this.value),
            rangeValue: this.max - this.min
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
        dotWidth(){
            return 100 * this.step / this.rangeValue;
        },
        stops(){
            const dotsNum = this.rangeValue / this.step;
            const dotsRet = [];

            for(let i = 1; i < dotsNum; i++){
                dotsRet.push(this.dotWidth * i + '%');
            }
            return dotsRet;
        },
        thumbs(){
            let ret = [];
            
            this.currentValue.forEach((val,index) => {
                ret.push({
                    index,
                    val,
                    left: (val / this.step) * this.dotWidth
                });
            });
            return ret;
        },
        barStyles(){
            const styles = Object.create(null);

            const begin = this.currentValue.length > 1 ? this.currentValue[0] : 0;
            const end = this.currentValue[this.currentValue.length - 1];
            
            return {
                width: ((end - begin) / this.step) * this.dotWidth + '%',
                left: (begin / this.step) * this.dotWidth + '%'
            };
        },
        stopClasses(){
            return [
                `${prefixCls}-stop`
            ];
        }
    },
    methods: {
        beginDrag(e,index){
            if(this.isDragging){
                return ;
            }
            this.isDragging = true;
            const bounding = this.$refs.slider.getBoundingClientRect();
            this.startX = e.clientX;
            this.sliderWidth = bounding.width;
            this.thumbIndex = index;
            this.startValue = this.currentValue[index];
        },
        dragging(e){
            if(!this.isDragging){
                return ;
            }
            const curX = e.clientX;
            
            const stepWidth = (this.step / this.rangeValue) * this.sliderWidth;

            const distanceStep = Math.round((curX - this.startX) / stepWidth) * this.step;
            this.$set(this.currentValue,this.thumbIndex,this.startValue + distanceStep);
        },
        endDrag(){
            if(!this.isDragging){
                return ;
            }
            this.isDragging = false;
        }
    },
    mounted(){
        //this.$set(this.currentValue,0,10);

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

