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

    <div class="list">
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
            <span>Default</span>
        </Button>
        <Button type="primary" disabled>
            <span>Primary,Danger</span>
        </Button>
        <Button type="info" disabled>
            <span>Info,Danger</span>
        </Button>
        <Button type="success" disabled>
            <span>Success,Danger</span>
        </Button>
        <Button type="warning" disabled>
            <span>Warning,Danger</span>
        </Button>
        <Button type="danger" disabled>
            <span>Danger,Danger</span>
        </Button>
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
    .list{
        padding: 0 15px;

        .yl-ui-button{
            margin-top: 14px;
        }
    }
</style>

