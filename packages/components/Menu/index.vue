<template>
<div :class="classes">

    <div :class='headCls' v-vue-tap='handleExpand' ref="menu">
        <span>{{ title }}</span>
        <Icon v-if='(icon || customIcon)' :type='icon' :custom='customIcon' size='30'></Icon>
    </div>

    <collapse-transition>
        <div v-show='isExpand'>
            <slot name="items"></slot>
        </div>
    </collapse-transition>

</div>
</template>

<script>
import Icon from '#c/Icon/';
import CollapseTransition from '#/transitions/collapse-transition';

const prefixCls = 'yl-ui-menu';

export default {
    name: 'Menu',
    components: {
        Icon,
        CollapseTransition
    },
    data(){
        return {
            isExpand: false,
            showSlot: true
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: ''
        },
        customIcon: {
            type: String,
            default: ''
        },
        custom: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes(){
            return [
                `${prefixCls}`,
                {active: !!this.isExpand}
            ];
        },
        headCls(){
            return [
                `${prefixCls}-header`,
                {
                    [`${this.custom}`]: this.custom != '',
                    'expanded': !!this.isExpand
                }
            ];
        }
    },
    methods: {
        handleExpand(e){
            this.isExpand = !this.isExpand;

            this.$emit('expand',this.isExpand);
        }
    }
}
</script>

