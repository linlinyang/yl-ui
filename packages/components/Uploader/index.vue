<template>
    <div :class='prefixCls'>

        <input type='hidden' :name='name' :value='currentValue' />

        <div :class='prefixCls + "-preview"'>
            <div 
                :class='prefixCls + "-preview-item"'
                v-for='(val,index) in currentValue'
                :key='index'
            >
                <img 
                    :src='val'
                    @click='preview(index,val,$event)'
                />
            </div>
            <div 
                :class='prefixCls + "-preview-add"'
                v-if='currentValue.length <= max'
            >
                <input 
                    type='file' 
                    accept='image/jpeg,image/png,image/jpg' 
                    @change='selectFile'
                />
            </div>
        </div>

        <div 
            :class='cropperCls'
            v-show='isCropping'
        ></div>

    </div>
</template>

<script>
import JSCropper from '@yanglinlin/js_cropper';
import {on,off} from '#/utils/dom';

const prefixCls = 'yl-ui-uploader';
const rootEl = document.documentElement || document.body;
let uid = 1;

export default {
    name: 'UploadImg',
    props: {
        value: {
            type: [String,Array],
            default: ''
        },
        name: {
            type: String,
            default: `uploader_${+new Date()}_${++uid}`
        },
        max: {
            type: Number,
            default: 100
        },
        size: {
            validator(val){
                return ['default','small','min'].includes(val);
            },
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        imgType: {
            validator(val){
                return ['image/jpg','image/png','image/jpeg'];
            },
            default: 'image/png'
        },
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 300
        }
    },
    data(){
        const val = Array.isArray(this.value) ? this.value : [this.value];
        return {
            currentValue: val,
            prefixCls,
            cropperWidth: 0,
            cropperHeight: 0,
            cWidth: this.width,
            cHeight: this.height,
            quality: 1,
            img: null,
            isCropping: false
        };
    },
    computed: {
        previewCls(){
            return [
                `${prefixCls}-preview`,
                {
                    [`${prefixCls}-preview-${this.size}`]: this.size !== 'default',
                    [`${prefixCls}-preview-${this.disabled}`]: this.disabled
                }
            ];
        },
        cropperCls(){
            return [
                `${prefixCls}-cropper`
            ];
        }
    },
    watch: {
        value(newVal){
            this.currentValue = Array.isArray(newVal) ? newVal : [newVal];
        },
        currentValue(curVal){
            this.$emit('input',this.currentValue);
        }
    },
    methods: {
        preview(index,src,e){

        },
        selectFile(e){
            const tagEl = e.target || e.srcElement;
            this.isCropping = true;
        },
        cropperUpdate(){
            const {
                cropperWidth,
                cropperHeight,
                cWidth: width,
                cHeight: height,
                img
            } = this;
            const options = {
                cropperWidth,
                cropperHeight,
                width,
                height,
                img
            };
            if(!this.jc){
                this.jc = new JSCropper(Object.assign({
                    el: `${this.cropperCls}`,
                },options));
            }else{
                jc.update(options);
            }

        },
        resize(e){
            this.cropperWidth = Math.max(rootEl.offsetWidth,rootEl.clientWidth);
            this.cropperHeight = Math.max(rootEl.offsetHeight,rootEl.clientHeight);
        }
    },
    update(){
        this.$nextTick(() => {
            this.cropperUpdate();
        });
    },
    mounted(){
        on(window,'resize',this.resize);
        this.resize();
    },
    destroyed(){
        off(window,'resize',this.resize);
        this.jc.destroy();
    }
}
</script>
