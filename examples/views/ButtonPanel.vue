<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Button</p>
		</template>
		<template #body>
			<p>按钮</p>
		</template>
    </Header>

    <div class="full-size">
        <Button>
            <span>Default</span>
        </Button>
        <Button type="primary">
            <span>Primary</span>
        </Button>
        <Button type="info">
            <span>Info</span>
        </Button>
        <Button type="success">
            <span>Success</span>
        </Button>
        <Button type="warning">
            <span>Warning</span>
        </Button>
        <Button type="danger">
            <span>Danger</span>
        </Button>
        <Button plain>
            <span>Default,Plain</span>
        </Button>
        <Button type="primary" plain>
            <span>Primary,Plain</span>
        </Button>
        <Button type="info" plain>
            <span>Info,Plain</span>
        </Button>
        <Button type="success" plain>
            <span>Success,Plain</span>
        </Button>
        <Button type="warning" plain>
            <span>Warning,Plain</span>
        </Button>
        <Button type="danger" plain>
            <span>Danger,Plain</span>
        </Button>
        <Button disabled>
            <span>Default,Disabled</span>
        </Button>
        <Button type="primary" disabled>
            <span>Primary,Disabled</span>
        </Button>
        <Button type="info" disabled>
            <span>Info,Disabled</span>
        </Button>
        <Button type="success" disabled>
            <span>Success,Disabled</span>
        </Button>
        <Button type="warning" disabled>
            <span>Warning,Disabled</span>
        </Button>
        <Button type="danger" disabled>
            <span>Danger,Disabled</span>
        </Button>
        <Button loading >
            <span>Default,Loading</span>
        </Button>
        <Button type="primary" loading >
            <span>Primary,Loading</span>
        </Button>
        <Button type="info" loading >
            <span>Info,Loading</span>
        </Button>
        <Button type="success" loading >
            <span>Success,Loading</span>
        </Button>
        <Button type="warning" loading >
            <span>Warning,Loading</span>
        </Button>
        <Button type="danger" loading >
            <span>Danger,Loading</span>
        </Button>
    </div>

    <div class="size-list">
        <Button size='default'>Default</Button>
        <Button size='small'>Small</Button>
        <Button size='mini'>Mini</Button>
    </div>

    <div class="round-list">
        <Button round >Default,Round</Button>
        <Button size='small' round >Small,Round</Button>
        <Button size='mini' round >Mini,Round</Button>
    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Button from '#c/Button/';

export default {
    name: 'ButtonPanel',
    components: {
        Header,
        Button
    }
}
</script>

<style lang="scss" scoped>
    .full-size{
        padding: 0 15px;

        .yl-ui-button{
            margin-top: 14px;
            width: 100%;
        }
    }
    .size-list,.round-list{
        padding: 0 15px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        .yl-ui-button{
            margin-top: 14px;
        }
    }
</style>

