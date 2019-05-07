export default {
    props: {
        placement: {
            type: String,
            default: 'bottom'
        },
        reference: Object,
        popper: Object,
        offset: {
            default: 0
        },
        transition: String,
        options: {
            type: Object,
            default(){
                return {
                    modifiers: {
                        computedStyle: {
                            gpuAcceleration: false
                        },
                        preventOverflow: {
                            boundaiesElment: 'window'
                        }
                    }
                };
            }
        }
    },
    data(){
        return {
            visible: false
        };
    },
    watch: {
        visible(val){
            if(val){
                
            }else{

            }
        }
    },
    methods: {
        updatePopper(){

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