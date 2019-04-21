<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Radio</p>
		</template>
		<template #body>
			<p>单选</p>
		</template>
    </Header>

    <div class="list">

        <RadioGroup name='gender'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
            <Radio value='3'>未知</Radio>
        </RadioGroup>

    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import RadioGroup from '#c/Radio/RadioGroup.vue';
import Radio from '#c/Radio/';

export default {
    name: 'RadioPanel',
    components: {
        Header,
        RadioGroup,
        Radio
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
