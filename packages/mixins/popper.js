import Popper from 'popper.js';

export default {
    props: {
        placement: {
            validator(val){
                if(typeof val !== 'string'){
                    return false;
                }
                return /^(top|left|bottom|right)(-start|-end)?$/.test(val);
            },
            default: 'top'
        },
        reference: Object,
        popper: Object,
        offset: {
            type: [Number,String],
            default: 0
        },
        showPopper: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default(){
                return {
                    modifiers: {
                        computeStyle: {
                            gpuAcceleration: false
                        },
                        preventOverflow: {
                            boundaiesElment: window
                        }
                    }
                };
            }
        }
    },
    data(){
        return {
            visible: this.showPopper
        };
    },
    watch: {
        visible(val){
            if(val){
                this.$emit('on-popper-show');
            }else{
                this.$emit('on-popper-hide');
            }
        }
    },
    methods: {
        createPopper(){
            const reference = this.reference || this.$refs.reference;
            const popper = this.popper || this.$refs.popper;
            const options = this.options;

            options.placement = this.placement;
            if(this.offset){
                options.modifiers.offset = {
                    offset: this.offset
                };
            }
            options.onCreate = () => {
                this.$nextTick(this.updatePopper);
            };

            this.popperJS = new Popper(reference,popper,options);
        },
        updatePopper(){
            this.popperJS ? this.popperJS.update() : this.createPopper();
        }
    },
    updated(){
        this.$nextTick(() => {
            this.updatePopper();
        });
    },
    beforeDestory(){
        if(this.popperJS){
            this.popperJS.destory();
        }
    }
};