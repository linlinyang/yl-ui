<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Switch</p>
		</template>
		<template #body>
			<p>开关</p>
		</template>
    </Header>

    <div class="list">


    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Input from '#c/Input/';

export default {
    name: 'InputPanel',
    components: {
        Header,
        Input
    }
}
</script>

<style lang="scss" scoped>
    .list{
        padding: 0 15px;
        position: relative;

        .yl-ui-input{
            width: 100%;
            margin-top: 15px;
        }
    }

    .size-list{
        padding: 0 15px;
        margin-top: 15px;
        position: relative;
        text-align: center;

        .yl-ui-input{
            margin-left: 15px;
        }
    }
</style>
