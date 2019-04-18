<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Input</p>
		</template>
		<template #body>
			<p>表单输入</p>
		</template>
    </Header>

    <div class="list">

        <Input placeholder="Default"></Input>
        <Input clearable value="可清除的输入框" ></Input>
        <Input :plain="false" placeholder="非镂空的输入框"></Input>
        <Input disabled value="Disabled" ></Input>
        <Input prefixIcon='search' placeholder="属性方式，前图标"></Input>
        <Input placeholder="slot方式，前图标">
            <template #prefixIcon >
                <Icon type='search'></Icon>
            </template>
        </Input>
        <Input suffixIcon='date' placeholder="属性方式，后图标"></Input>
        <Input placeholder="slot方式，后图标">
            <template #suffixIcon >
                <Icon type='date'></Icon>
            </template>
        </Input>
        <Input placeholder="复合型输入框，前复合">
            <template #prepend >Http://</template>
        </Input>
        <Input :plain='false' placeholder="复合型输入框，前复合">
            <template #prepend >Http://</template>
        </Input>
        <Input placeholder="复合型输入框，后复合">
            <template #append >.com</template>
        </Input>
        <Input :plain='false' placeholder="复合型输入框，后复合">
            <template #append >.com</template>
        </Input>

    </div>

    <div class="size-list">
        <Input suffixIcon='date' placeholder="默认尺寸"></Input>
        <Input size="small" suffixIcon='date' placeholder="small尺寸"></Input>
        <Input size="mini" suffixIcon='date' placeholder="mini尺寸"></Input>
    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Input from '#c/Input/';
import Icon from '#c/Icon/';

export default {
    name: 'InputPanel',
    components: {
        Header,
        Input,
        Icon
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
