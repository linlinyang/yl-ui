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
        <Input prefixIcon='search' placeholder="请输入内容，属性方式"></Input>
        <Input placeholder="请输入内容，slot方式">
            <template #prefixIcon >
                <Icon type='search'></Icon>
            </template>
        </Input>

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
            margin-top: 15px;
        }
    }
</style>
