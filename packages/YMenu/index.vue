<template>
<div class="menu" :class="expandCls">

    <div class="menu-header" :class='headCls' @click='handleExpand'>
        <span>{{ title }}</span>
        <Icon v-if='(icon || customIcon)' :type='icon' :custom='customIcon' size='30'></Icon>
    </div>

    <transition name='expand'>
        <div class="menu-body">
            <slot name="items"></slot>
        </div>
    </transition>
    

</div>
</template>

<script>
import Icon from '#/Icon/';

export default {
    name: 'Menu',
    components: {
        Icon
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
        .menu-body{
            height: 0;
            overflow: hidden;
        }

        &.active{
            .menu-header{
                opacity: 0.4;
            }
            .menu-body{
                 height: auto;
            }
        }
    }

    .expand-enter{
        transition: all 3s ease-in-out;
    }
    .expand-leave{
        transition: height 3s ease-in-out;
    }
</style>
