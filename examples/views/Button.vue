<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Button</p>
		</template>
		<template #body>
			<p>按钮</p>
		</template>
    </Header>

</div>
</template>

<script>
import Header from '@/components/Header/';

export default {
    name: 'Button',
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>

</style>

