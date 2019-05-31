import JSCropper from '@yanglinlin/js_cropper';

export default{
    props: {
        cropperWidth: {
            type: Number,
            default: 800
        },
        cropperHeight: {
            type: Number,
            default: 600
        },
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 300
        }
    }
}