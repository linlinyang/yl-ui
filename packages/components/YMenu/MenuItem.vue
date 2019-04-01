<template>
<div class="wrapper">
    <a class="menu-item" v-if='linkUrl != ""'>
        <span>{{ title }}</span>
        <Icon :type='icon' :size='size'></Icon>
    </a>
</div>
</template>

<script>
import Icon from '#c/Icon';

export default {
    name: 'MenuItem',
    components: {
        Icon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: 'next'
        },
        size: {
            type: String,
            default: '18px'
        },
        linkUrl: {
            type: String,
            default: '#'
        }
    }
}
</script>

<style lang="scss" scoped>

    .wrapper{
        padding: 0 20px;

        .menu-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e5e5;
            padding: 15px 0;
            width: 100%;
        }

        &:last-child{
            .menu-item{
                border: 0
            }
        }
    }
</style>


