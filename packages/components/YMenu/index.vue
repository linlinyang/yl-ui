<template>
<div class="menu" :class="expandCls">

    <div class="menu-header" :class='headCls' @click='handleExpand'>
        <span>{{ title }}</span>
        <Icon v-if='(icon || customIcon)' :type='icon' :custom='customIcon' size='30'></Icon>
    </div>

    <collapse-transition>
        <div class="menu-body" v-show='isExpand'>
            <slot name="items"></slot>
        </div>
    </collapse-transition>

</div>
</template>

<script>
import Icon from '#c/Icon/';
import CollapseTransition from '#c/base/collapse-transition';
import {queryAll} from '#/utils/query';

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
        headCls(){
            return {
                [`${this.custom}`]: this.custom != ''
            };
        },
        expandCls(){
            return {
                 active: !!this.isExpand
            };
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

<style lang="scss" scoped>
    .menu{
        background: #fff;
        border-radius: 5px;

        .menu-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            cursor: pointer;
            font-size: 16px;
        }
        
    }

</style>

<style>
    .collapse-transition{
        transition:.2s height ease-in-out
    }
</style>

