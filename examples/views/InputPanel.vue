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
            margin-top: 15px;
        }
    }
</style>
