<template>
    <div class="action-sheet">
        <Header>
            <template #title>
                <p>ActionSheet</p>
            </template>
            <template #body>
                <p>弹出式菜单</p>
            </template>
        </Header>
    </div>
</template>

<script>
import Header from '@/components/Header/';

export default {
    name: 'ActionSheet',
    components: {
        Header
    }
}

</script>