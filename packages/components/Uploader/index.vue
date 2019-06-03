<template>
    <div 
        :class='prefixCls'
        ref='uploader'
    >

        <input type='hidden' :name='name' :value='currentValue' />

        <div :class='previewCls'>
            <div 
                :class='previewItemCls'
                v-for='(val,index) in currentValue'
                :key='index'
                @click='previewItem(index,val,$event)'
            >
                <img 
                    :src='val'
                />
            </div>
            <div 
                :class='previewAdd'
                v-if='currentValue.length <= max'
            >
                <input 
                    type='file' 
                    accept='image/jpeg,image/png,image/jpg' 
                    ref='file'
                    @change='selectFile'
                />
            </div>
        </div>

        <div 
            :class='cropperCls'
            :id='uniqueCropperId'
            v-show='isCropping'
        >
            <div :class="prefixCls + '-btns'">
                <div @click="cut" v-if='!this.disabled'>
                    <slot name="cut">{{ cutTxt }}</slot>
                </div>
                <div @click="deleteItem(deleteIndex)" v-if='deleteIndex !== false || !this.disabled'>
                    <slot name="remove">{{ deleteTxt }}</slot>
                </div>
                <div @click="cancel">
                    <slot name="cancel">{{ cancelTxt }}</slot>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import JSCropper from '@yanglinlin/js_cropper';
import {on,off} from '#/utils/dom';

const prefixCls = 'yl-ui-uploader';
const rootEl = document.documentElement || document.body;
let uid = 1;
const now = "" + +new Date();

export default {
    name: 'UploadImg',
    props: {
        value: {
            type: [String,Array],
            default: ''
        },
        name: {
            type: String,
            default: `uploader_${now}_${++uid}`
        },
        max: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customCls:{
            type: String,
            default: ''
        },
        customAdd: {
            type: String,
            default: ''
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
        },
        cutTxt: {
            type: String,
            default: '确认'
        },
        deleteTxt: {
            type: String,
            default: '删除'
        },
        cancelTxt: {
            type: String,
            default: '取消'
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
            isCropping: false,
            deleteIndex: false,
            uniqueCropperId: `cropper-wrap-${now.substr(0,4)}-${++uid}`
        };
    },
    computed: {
        previewCls(){
            return [
                `${prefixCls}-preview`,
                {
                    [`${prefixCls}-preview-${this.disabled}`]: this.disabled
                }
            ];
        },
        cropperCls(){
            return [
                `${prefixCls}-cropper`
            ];
        },
        previewItemCls(){
            return [
                `${prefixCls}-preview-item`,
                {
                    [`${this.customCls}`]: !!this.customCls
                }
            ];
        },
        previewAdd(){
            return [
                `${prefixCls}-preview-add`,
                {
                    [`${this.customAdd}`]: !!this.customAdd
                }
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
        previewItem(index,src,e){
            this.img = src;
            this.cropperUpdate();
            this.isCropping = true;
            this.deleteIndex = index;
        },
        selectFile(e){
            if(this.disabled){return;}
            let tagEl = e.target || e.srcElement;
            this.isCropping = true;
            this.deleteIndex = false;
            let file = tagEl.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                this.img = reader.result;
                tagEl = file = reader = null;
                this.$nextTick(() => {
                    this.cropperUpdate();
                });
            }
            reader.readAsDataURL(file);
        },
        cropperUpdate(){
            const {
                cropperWidth,
                cropperHeight,
                img
            } = this;
            const options = {
                cropperWidth,
                cropperHeight: cropperHeight - 60,
                img
            };
            if(!this.jc){
                this.jc = new JSCropper(Object.assign({
                    el: `#${this.uniqueCropperId}`,
                },options));
            }else{
                this.jc.update(options);
            }

        },
        resize(e){
            this.cropperWidth = rootEl.clientWidth;
            this.cropperHeight = rootEl.clientHeight;
            this.cropperUpdate();
        },
        cut(){
            const result = this.jc ? this.jc.cut() : null;
            this.currentValue.push(result);
            this.cancel();
            this.$emit('on-cut',result);
        },
        cancel(){
            this.isCropping = false;
            this.$refs.file.value = '';
        },
        deleteItem(index){
            const src = this.currentValue.splice(index,1);
            this.cancel();
            this.$emit('on-delete',src,index);
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
        this.jc && this.jc.destroy();
    }
}
</script>
