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

        <div class="row">
            <label>默认单选</label>
            <RadioGroup name='gender' v-model="selectVal">
                <Radio value='1'>男</Radio>
                <Radio value='2'>女</Radio>
                <Radio value='3'>未知</Radio>
            </RadioGroup>
            <div class="help-block">选中值为：{{ selectVal }}</div>
        </div>

        <div class="row">
            <label>disabled</label>
            <RadioGroup name='genderDis' value='2'>
                <Radio value='1'>男</Radio>
                <Radio value='2' disabled >女</Radio>
                <Radio value='3'>未知</Radio>
            </RadioGroup>
        </div>

        <div class="row">
            <label>垂直选择</label>
            <RadioGroup name='system' value='3' vertical >
                <Radio value='1'>window</Radio>
                <Radio value='2'>ios</Radio>
                <Radio value='3'>linux</Radio>
                <Radio value='4'>其他</Radio>
            </RadioGroup>
        </div>

        <div class="row">
            <label>small尺寸</label>
            <RadioGroup name='small-size' value='1' size='small' >
                <Radio value='1'>window</Radio>
                <Radio value='2'>ios</Radio>
                <Radio value='3'>linux</Radio>
                <Radio value='4'>其他</Radio>
            </RadioGroup>
        </div>

        <div class="row">
            <label>mini尺寸</label>
            <RadioGroup name='mini-size' value='1' size='mini' >
                <Radio value='1'>window</Radio>
                <Radio value='2'>ios</Radio>
                <Radio value='3'>linux</Radio>
                <Radio value='4'>其他</Radio>
            </RadioGroup>
        </div>

        <div class="row">
            <label>单选按钮</label>
            <RadioGroup name='city' value='1' type='button'>
                <Radio value='1'>北京</Radio>
                <Radio value='2'>上海</Radio>
                <Radio value='3'>广州</Radio>
                <Radio value='4'>深证</Radio>
            </RadioGroup>
        </div>

        <div class="row">
            <label>disabled</label>
            <RadioGroup name='cityDis' value='2' type='button'>
                <Radio value='1'>北京</Radio>
                <Radio value='2' disabled >上海</Radio>
                <Radio value='3'>广州</Radio>
                <Radio value='4'>深证</Radio>
            </RadioGroup>
        </div>
        
        <div class="row">
            <label>small尺寸</label>
            <RadioGroup name='small-btn' value='1' type='button' size='small'>
                <Radio value='1'>北京</Radio>
                <Radio value='2'>上海</Radio>
                <Radio value='3'>广州</Radio>
                <Radio value='4'>深证</Radio>
            </RadioGroup>
        </div>

        <div class="row">
            <label>mini尺寸</label>
            <RadioGroup name='small-btn' value='1' type='button' size='mini'>
                <Radio value='1'>北京</Radio>
                <Radio value='2'>上海</Radio>
                <Radio value='3'>广州</Radio>
                <Radio value='4'>深证</Radio>
            </RadioGroup>
        </div>

    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import RadioGroup from '#c/Radio/RadioGroup.vue';
import Radio from '#c/Radio/';

export default {
    name: 'RadioPanel',
    data(){
        return {
            selectVal: '1'
        }
    },
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
