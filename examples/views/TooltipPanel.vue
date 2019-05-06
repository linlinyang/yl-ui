<template>
<div class="btns">

    <Header>
        <template #title>
			<p>ToolTip</p>
		</template>
		<template #body>
			<p>Tooltip 文字提示</p>
		</template>
    </Header>

    <div class="list">

        <div class="row">
             <Tooltip placement="top">
                <Button>Button</Button>
                <template #content>
                    <div>
                        <p>Display multiple lines of information</p>
                        <p><i>Can customize the style</i></p>
                    </div>
                </template>
            </Tooltip>
        </div>
        
    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Button from '#c/Button/';
import Tooltip from '#c/Tooltip/';

export default {
    name: 'TooltipPanel',
    components: {
        Header,
        Tooltip,
        Button
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
                text-align: right;
            }
            .yl-ui-slider{
                margin-left: 20px;
            }
        }
    }

</style>
