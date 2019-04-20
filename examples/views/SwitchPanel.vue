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

        <div class="row">
            <div class="label">默认开关</div>
            <iSwitch></iSwitch>
        </div>
        <div class="row">
            <div class="label">默认打开</div>
            <iSwitch value ></iSwitch>
        </div>
        <div class="row">
            <div class="label">设置开关颜色</div>
            <iSwitch activeColor='#2d8cf0' inActiveColor='#ff4949'></iSwitch>
        </div>
        <div class="row">
            <div class="label">small尺寸</div>
            <iSwitch size='small' activeColor='#2d8cf0' inActiveColor='#ff4949' value ></iSwitch>
        </div>
        <div class="row">
            <div class="label">mini尺寸</div>
            <iSwitch size='mini' ></iSwitch>
        </div>
        <div class="row">
            <div class="label">设置开关值</div>
            <iSwitch activeValue='1' inActiveValue='0' v-model="switchVal"></iSwitch>
            <div class="append">{{ switchVal }}</div>
        </div>
        <div class="row">
            <div class="label">disabled</div>
            <iSwitch disabled ></iSwitch>
        </div>

    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import iSwitch from '#c/Switch/';

export default {
    name: 'SwitchPanel',
    data(){
        return {
            switchVal: 0
        };
    },
    components: {
        Header,
        iSwitch
    }
}
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        padding: 0 15px;
        width: 100%;
        box-sizing: border-box;
        flex-flow: column nowrap;

        .row{
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            overflow: hidden;
            margin-top: 10px;
            align-items: center;

            .label{
                width: 30%;
                display: table-cell;
                text-align: right;
            }
            .yl-ui-switch{
                margin-left: 20px;
            }
        }
    }

</style>
