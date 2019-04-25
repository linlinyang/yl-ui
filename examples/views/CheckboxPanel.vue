<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Checkbox</p>
		</template>
		<template #body>
			<p>多选</p>
		</template>
    </Header>

    <div class="list">

        <div class="row">
            <label>默认</label>
            <CheckboxGroup name='fruit' v-model="selectVal">
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2'>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
            <div class="help-block">{{ selectVal }}</div>
        </div>

        <div class="row">
            <label>disabled</label>
            <CheckboxGroup name='fruit1'>
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2' disabled>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
        </div>

        <div class="row">
            <label>disabled选中</label>
            <CheckboxGroup name='fruit1' :value='disabledSelect'>
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2' disabled>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
        </div>

    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import CheckboxGroup from '#c/Checkbox/CheckboxGroup';
import Checkbox from '#c/Checkbox/';

export default {
    name: 'checkboxPanel',
    data(){
        return {
            selectVal: ['3'],
            disabledSelect: ['2']
        }
    },
    components: {
        Header,
        CheckboxGroup,
        Checkbox
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
        padding-bottom: 30px;

        .row{
            display: flex;
            margin-top: 20px;
            flew-flow: row nowrap;
            align-items: center;

            >label{
                text-align: right;
                margin-right: 20px;
                flex-shrink: 0;
            }

            .help-block{
                margin-left: 20px;
                flex-shrink: 1;
            }
        }
    }

</style>
