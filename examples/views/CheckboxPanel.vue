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
            <label>水果：</label>
            <CheckboxGroup name='fruit1'>
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2'>西瓜</Checkbox>
                <Checkbox value='3' checked>香蕉</Checkbox>
            </CheckboxGroup>
        </div>

        <div class='row'>
            <label>单个checkbox</label>
            <Checkbox v-model='agree' name='agree'>{{ agree ? '同意' : '不同意' }}</Checkbox>
        </div>

        <div class="row">
            <label>disabled</label>
            <CheckboxGroup name='fruit2'>
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2' disabled>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
        </div>

        <div class="row">
            <label>disabled选中</label>
            <CheckboxGroup name='fruit3' :value='disabledSelect'>
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2' disabled>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
        </div>
        
        <div class="row">
            <label>垂直选择</label>
            <CheckboxGroup name='fruit4' vertical >
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2'>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
        </div>
        
        <div class="row">
            <label>small尺寸</label>
            <CheckboxGroup name='fruit5' size='small' >
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2'>西瓜</Checkbox>
                <Checkbox value='3'>香蕉</Checkbox>
            </CheckboxGroup>
        </div>

        <div class="row">
            <label>mini尺寸</label>
            <CheckboxGroup name='fruit6' size='mini' >
                <Checkbox value='1'>苹果</Checkbox>
                <Checkbox value='2'>西瓜</Checkbox>
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
            disabledSelect: ['2'],
            agree: true
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
