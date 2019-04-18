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

        <iSwitch></iSwitch>
        <iSwitch value ></iSwitch>
        <iSwitch activeColor='#2d8cf0' ></iSwitch>

    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import iSwitch from '#c/Switch/';

export default {
    name: 'SwitchPanel',
    components: {
        Header,
        iSwitch
    }
}
</script>

<style lang="scss" scoped>
    .list{
        text-align: center;
        
        .yl-ui-switch{
            margin-left: 20px;
        }
    }

</style>
